import React, { useState } from "react";
import { Eye, EyeOff, User, Building, Users, Briefcase } from "lucide-react";
import { useDispatch } from "react-redux";
import { loginAdmin, signupAdmin } from "../store/globalAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState("User");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("phone"); // 'phone', 'username', 'password'
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    labName: "",
    username: "",
    ownerName: "",
    email: "",
    patientCount: "",
    previousSoftware: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { activeTab, isLoginMode, formData });

    const signupData = {
      role: activeTab, // ✅ Added role
      phone: formData.phone,
      password: formData.password,
      labName: formData.labName,
      ownerName: formData.ownerName,
      email: formData.email,
      patientCount: formData.patientCount,
      previousSoftware: formData.previousSoftware,
    };

    const loginData = {
      role: activeTab, // ✅ Added role
      email: formData.email,
      password: formData.password,
    };

    try {
      if (isLoginMode) {
        if (loginMethod === "phone") {
          await getOTP(); // Assuming getOTP is async
          toast.success("OTP sent successfully!");
        } else {
          await dispatch(loginAdmin(loginData)).unwrap();
          toast.success("Login successful!");
          navigate("/dashboard");
        }
      } else {
        await dispatch(signupAdmin(signupData)).unwrap();
        toast.success("Signup successful! Please log in.");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error(error?.message || "Something went wrong. Please try again.");
    }
  };

  const getOTP = () => {
    console.log("Getting OTP for:", formData.phone);
    // Handle OTP logic here
  };

  const patientCountOptions = [
    "1-30 Patient Per Day",
    "30-50 Patient Per Day",
    "50-100 Patient Per Day",
    "100-200 Patient Per Day",
    "200-500 Patient Per Day",
    "500+ Patient Per Day",
  ];

  const tabs = [
    { id: "User", label: "User", icon: User },
    { id: "Admin", label: "Admin", icon: Users },
    { id: "Organisation", label: "Organisation", icon: Building },
    { id: "B2B", label: "B2B", icon: Briefcase },
  ];

  const canSignup = activeTab === "Admin";
  const canLoginWithPhone = activeTab === "User" || activeTab === "Admin";

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-white flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
          width="60rem"
          height="60rem"
          fill="none"
          viewBox="0 0 960 960"
        >
          <defs>
            <radialGradient
              id="bg-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(0 -480 480 0 480 480)"
            >
              <stop stopColor="#38bdf8"></stop>
              <stop offset="1" stopColor="#10b981" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
          <rect
            width="960"
            height="960"
            rx="480"
            fill="url(#bg-gradient)"
          ></rect>
        </svg>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-slate-900">
                Pathology <span className="gradient-text">LIS</span>
              </span>
            </div>
            <h2 className="text-xl font-semibold text-slate-700">
              {isLoginMode ? "Log In" : "Sign-Up for 5 days free trial !"}
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-sky-500 text-sky-600"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <IconComponent size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Login Mode */}
            {isLoginMode && (
              <>
                {/* Phone/Username/Password Login for User/Admin */}
                {canLoginWithPhone && (
                  <div className="space-y-4">
                    {/* Phone Login */}
                    {loginMethod === "phone" && (
                      <div className="flex">
                        <div className="flex items-center px-3 bg-slate-50 border border-r-0 border-slate-300 rounded-l-lg">
                          <span className="text-sm">🇮🇳 +91</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 border border-slate-300 rounded-r-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    )}

                    {/* Username Login */}
                    {loginMethod === "email" && (
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                        required
                      />
                    )}

                    {/* Password Login */}
                    {loginMethod === "password" && (
                      <>
                        <input
                          type="text"
                          name="email"
                          placeholder=" Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                          required
                        />
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Username/Password Login for Organisation/B2B */}
                {!canLoginWithPhone && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username or Email"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                      required
                    />
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Signup Mode */}
            {!isLoginMode && canSignup && (
              <div className="space-y-4">
                <input
                  type="text"
                  name="labName"
                  placeholder="🏥 Lab Name"
                  value={formData.labName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  required
                />

                <input
                  type="text"
                  name="ownerName"
                  placeholder="👤 Owner Name"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="📧 Email Id"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  required
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  required
                />

                <div className="flex">
                  <div className="flex items-center px-3 bg-slate-50 border border-r-0 border-slate-300 rounded-l-lg">
                    <span className="text-sm">🇮🇳 +91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-r-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <select
                  name="patientCount"
                  value={formData.patientCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white"
                  required
                >
                  <option value="">Patient count per day</option>
                  {patientCountOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="previousSoftware"
                  placeholder="Previous Software"
                  value={formData.previousSoftware}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 outline-none"
            >
              {isLoginMode
                ? canLoginWithPhone && loginMethod === "phone"
                  ? "Get OTP"
                  : "Log In"
                : "Sign Up"}
            </button>

            {/* Alternative Login Option */}
            {isLoginMode && canLoginWithPhone && loginMethod === "phone" && (
              <>
                <div className="text-center text-slate-500 text-sm">or</div>
                <button
                  type="button"
                  onClick={() => setLoginMethod("password")}
                  className="w-full border border-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Log In with password
                </button>
              </>
            )}
          </form>

          {/* Toggle Login/Signup */}
          {canSignup && (
            <div className="mt-6 text-center text-sm text-slate-600">
              {isLoginMode
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-sky-600 hover:text-sky-700 font-medium"
              >
                {isLoginMode ? "Sign Up" : "Log In"}
              </button>
            </div>
          )}

          {/* Terms & Privacy */}
          {!isLoginMode && (
            <div className="mt-6 text-center text-xs text-slate-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-sky-600 hover:underline">
                Terms & Condition
              </a>{" "}
              and{" "}
              <a href="#" className="text-sky-600 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          )}

          {/* Cannot Signup Message */}
          {!canSignup && !isLoginMode && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 text-center">
                {activeTab} accounts can only log in. Please contact your
                administrator for access.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
