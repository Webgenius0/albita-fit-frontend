import Layout from "@/layout/Layout";
import CookieConsent from "@/pages/CookieConsent";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import Register from "@/pages/Register";
import GetStarted from "@/pages/GetStarted";
import { createBrowserRouter } from "react-router-dom";
import Welcome from "@/pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
]);

export default router;
