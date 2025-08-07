import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Lab from "../models/auth.model.js";

// Signup controller
export const signup = async (req, res) => {
  try {
    const {
      phone,
      password,
      labName,
      ownerName,
      email,
      previousSoftware,
      patientCount,
    } = req.body;

    // Check if lab already exists with email
    const existingLab = await Lab.findOne({ email });

    if (existingLab) {
      return res.status(400).json({
        success: false,
        message: "Lab already exists with this email ",
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new lab
    const newLab = new Lab({
      phone,
      password: hashedPassword,
      labName,
      ownerName,
      email,
      patientCount,
      previousSoftware,
    });

    // Save to database
    const savedLab = await newLab.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        labId: savedLab._id,
        email: savedLab.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password from response
    const labResponse = savedLab.toObject();
    delete labResponse.password;

    res.status(201).json({
      success: true,
      message: "Lab registered successfully",
      data: {
        lab: labResponse,
        token,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors,
      });
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email/username and password",
      });
    }

    // Find lab by email or username
    const lab = await Lab.findOne({email});

    if (!lab) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, lab.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        labId: lab._id,
        email: lab.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password from response
    const labResponse = lab.toObject();
    delete labResponse.password;

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        lab: labResponse,
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get lab profile (protected route)
export const getProfile = async (req, res) => {
  try {
    // req.lab is set by auth middleware
    const lab = await Lab.findById(req.lab.labId).select("-password");

    if (!lab) {
      return res.status(404).json({
        success: false,
        message: "Lab not found",
      });
    }

    res.status(200).json({
      success: true,
      data: { lab },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
