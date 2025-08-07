import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginSignupPage from "./pages/LoginSignupPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./components/main/Layout";
import AnalysisPage from "./pages/AnalysisPage";
import LabProfilePage from "./pages/LabProfilePage";
import PaitentListPage from "./pages/PaitentListPage";
import FinancialAnalysisPage from "./pages/FinancialAnalysisPage";
import EnterVerifyPage from "./pages/EnterVerifyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignupPage />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/lab-profile" element={<LabProfilePage />} />
            <Route path="/enter-verify" element={<EnterVerifyPage />} />
            <Route
              path="/financial-analysis"
              element={<FinancialAnalysisPage />}
            />
            <Route path="/patient-list" element={<PaitentListPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />{" "}
          {/* Redirect to dashboard for any unmatched routes */}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
