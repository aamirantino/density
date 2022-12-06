import { Navigate } from "react-router-dom";
import DashboardLayout from '../../../src/layouts/DashboardLayout'
import Onboarding from "../Onboarding";
import Withdraw from "../Withdraw";
import Deposit from "../Deposit";
import Margin from "../Margin";

// Have to update in better way
const isAuthenticated=true
const routes = () => {
 
    return [
      {
        path: "/",
        children: [
          { path: "/", element: <Navigate to="/onboarding" /> },
          { path: "/404", element: <h1>Not found</h1> },
          { path: "*", element: <Navigate to="/404" /> },
        ],
      },
      {
        path: "/",
        element: isAuthenticated ? (
          <DashboardLayout />
        ) : (
          <Navigate to="/login" />
        ),
        children: [
          { path: "/onboarding", element: <Onboarding /> },
          { path: "/deposit", element: <Deposit /> },
          { path: "/withdraw", element: <Withdraw /> },
          { path: "/margin", element: <Margin /> },
          { path: "/404", element: <h1>Not found</h1> },
          { path: "*", element: <Navigate to="/404" /> },
        ],
      },
    ];
};

export default routes;