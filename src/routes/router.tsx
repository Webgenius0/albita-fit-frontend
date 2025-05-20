import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import CookieConsent from "@/pages/CookieConsent";
import Home from "@/pages/dashboard/Home";
import Login from "@/pages/Login";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import Register from "@/pages/Register";
import GetStarted from "@/pages/GetStarted";
import Welcome from "@/pages/Welcome";
import Plans from "@/pages/Plans";
import ResetPassword from "@/pages/ResetPassword";
import DashboardLayout from "@/layout/DashboardLayout";
import HomeTraining from "@/pages/dashboard/HomeTraining";
import GymTraining from "@/pages/dashboard/GymTraining";
import Diet from "@/pages/dashboard/Diet";
import NutritionPlan from "@/pages/dashboard/NutritionPlan";
import Profile from "@/pages/dashboard/Profile";
import Tutorials from "@/pages/dashboard/Tutorials";
import ProfileLinks from "@/components/profile/ProfileLinks";
import ProfileData from "@/pages/dashboard/ProfileData";
import UserOnboard from "@/pages/UserOnboard";
import AccountStatus from "@/pages/AccountStatus";
import SingleTraining from "@/pages/dashboard/SingleTraining";
import SelectPlan from "@/pages/SelectPlan";
import TestArea from "@/pages/dashboard/TestArea";
import VerifyEmailOTP from "@/pages/VerifyEmailOTP";
import PublicUserLayout from "@/layout/PublicUserLayout";
import TestLayout from "@/layout/TestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/onboard",
        element: <UserOnboard />,
      },

      {
        path: "/account-status",
        element: <AccountStatus />,
      },
      {
        path: "/select-plan",
        element: <SelectPlan />,
      },

      // dashboard routes for verified users
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                path: "profile",
                element: <ProfileLinks />,
              },
              {
                path: "profile/tutorials",
                element: <Tutorials />,
              },
              {
                path: "profile/data",
                element: <ProfileData />,
              },
            ],
          },
          {
            path: "diet",
            element: <Diet />,
          },
          {
            path: "diet/nutrition-plan",
            element: <NutritionPlan />,
          },
          {
            path: "home-training",
            element: <HomeTraining />,
          },
          {
            path: "gym-training",
            element: <GymTraining />,
          },
          {
            path: "training-session/:id",
            element: <SingleTraining />,
          },
        ],
      },
    ],
  },

  // <----- Test ROUTES ----->

  // test routes for users who are email verified and pending to be verified
  {
    path: "/",
    element: <TestLayout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/start-test",
        element: <TestArea />,
      },
    ],
  },

  // <----- PUBLIC ROUTES BUT NOT ACCESSABLE AFTER LOGIN ----->
  {
    path: "",
    element: <PublicUserLayout />,
    children: [
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
        path: "/verify-email",
        element: <VerifyEmailOTP />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },

  // <----- PUBLIC ROUTES ACCESSIBLE TO ANYONE ----->

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
]);

export default router;
