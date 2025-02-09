import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import MakeMoney from "../pages/makemoney";
import AffiliateLandingPage from "../pages/AffiliateLandingPage";
import BlogComponent from "../pages/BlogComponent";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>
    },
    {
      path: "/make-money",
      element: <MakeMoney></MakeMoney>
    },
    {
      path: "/aff",
      element: <AffiliateLandingPage></AffiliateLandingPage>
    },
    {
      path: "/blog",
      element: <BlogComponent></BlogComponent>
    },
  ]);