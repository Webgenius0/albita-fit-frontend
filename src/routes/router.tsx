import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import CookieConsent from "@/pages/CookieConsent";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import Register from "@/pages/Register";
import GetStarted from "@/pages/GetStarted";
import Welcome from "@/pages/Welcome";
import Plans from "@/pages/Plans";
import ResetPassword from "@/pages/ResetPassword";
import DashboardLayout from "@/layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile",
            element: <p>profile</p>,
          },
          {
            path: "/diet",
            element: <p>diet</p>,
          },
          {
            path: "/train",
            element: <p>train</p>,
          },
        ],
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/cookie-consent",
        element: <CookieConsent />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
