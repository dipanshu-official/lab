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
import CurrentStockPage from "./pages/inventory/CurrentStockPage";
import OutSourcePage from "./pages/test/OutSourcePage";
import TestlistPage from "./pages/test/TestlistPage";
import PakagesPage from "./pages/test/PakagesPage";
import ManageUserPage from "./pages/lab Management/ManageUserPage";
import RefrallistPage from "./pages/lab Management/RefrallistPage";
import ProcessinglistPage from "./pages/lab Management/ProcessinglistPage";
import B2Bpage from "./pages/lab Management/B2Bpage";
import PurchaseOrder from "./pages/inventory/PurchaseOrder";

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
            <Route path="/current-stock" element={<CurrentStockPage />} />

            {/* Tests Section */}
            <Route path="/test-outsource" element={<OutSourcePage />} />
            <Route path="/test-list" element={<TestlistPage />} />
            <Route path="/test-packages" element={<PakagesPage />} />
            {/* Lab Management Section */}

            <Route path= "/lab-manageuser" element={<ManageUserPage />} />
            <Route path="/lab-referrals" element={<RefrallistPage />} />
            <Route path="/lab-processing" element={<ProcessinglistPage />} />
            <Route path="/b2b" element={<B2Bpage />} />

            {/* inventory Management Section */}

            <Route path="/inventory/current-stock" element={<CurrentStockPage />} />
            <Route path="/inventory/purchase" element={<PurchaseOrder />} />
            <Route path="/inventory/dashboard" element={<DashboardPage />} />


          </Route>

          {/* Redirect to dashboard for any unmatched routes inside PrivateRoute */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        {/* Redirect to home for any unmatched routes outside PrivateRoute */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
