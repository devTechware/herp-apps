import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>404 Error</h1>,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/installation",
        Component: Installation
      },
      {
        path: "/app-details/:id",
        Component: AppDetails
      }
    ],
  }
]);

export default router;