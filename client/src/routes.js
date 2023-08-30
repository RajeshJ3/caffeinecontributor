// hoc
import ProtectedRoute from "./hoc/ProtectedRoute";
import RedirectIfAuth from "./hoc/RedirectIfAuth";

// routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import urls from "./utils/urls.json";

// components
import Layout from "./components/Layout";

// any auth pages
import Home from "./pages/Home";
import User from "./pages/User";

// auth pages
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

// unauth pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={urls.home.path} element={<Home />} />
          <Route
            path={urls.dashboard.path}
            element={<ProtectedRoute children={<Dashboard />} />}
          />
          <Route
            path={urls.settings.path}
            element={<ProtectedRoute children={<Settings />} />}
          />
          <Route
            path={urls.signup.path}
            element={<RedirectIfAuth children={<Signup />} />}
          />
          <Route
            path={urls.forgotPassword.path}
            element={<RedirectIfAuth children={<ForgotPassword />} />}
          />
          <Route
            path={urls.login.path}
            element={<RedirectIfAuth children={<Login />} />}
          />
          <Route path={urls.user.path} element={<User />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
