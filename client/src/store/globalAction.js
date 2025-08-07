import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosIntance.js";

// Utility for setting auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken");
  return `Bearer ${token}`;
};

//  student api section
export const signupAdmin = createAsyncThunk(
  "signup/signupAdmin",
  async (signupData, { rejectWithValue }) => {
    try {
      const {
        phone,
        password,
        labName,
        ownerName,
        email,
        patientCount,
        previousSoftware,
      } = signupData;

      const response = await axiosInstance.post(
        "/auth/signup",
        {
          phone,
          password,
          labName,
          ownerName,
          email,
          patientCount,
          previousSoftware,
        },
        {
          headers: getAuthHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      console.log("err =>", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to add student";
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "Login/loginAdmin",
  async (loginData, { rejectWithValue }) => {
    try {
      const { email, password } = loginData;

      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // Store token in localStorage if provided
      if (response.data.data.token) {
        localStorage.setItem("authToken", response.data.data.token);
        localStorage.setItem("role", role);
      }

      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Login failed";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getPrile = createAsyncThunk(
  "getPrile/Profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/getProfile", {
        headers: {
          Authorization: getAuthHeaders(),
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch teachers"
      );
    }
  }
);





