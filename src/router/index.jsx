import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from 'react';

import ErrorHandler from "../components/error/ErrorHandler";
import Layout from "../pages/Layout";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import BlogPage from "../pages/Blog";
import WorksPage from "../pages/Works";
import ServicePage from "../pages/Service";
import SingleBlog from "../pages/SingleBlog";
import SingleService from "../pages/SingleService";
import SingleService2 from "../pages/SingleService2";
import SingleService3 from "../pages/SingleService3";
import AdminLayout from "../components/dashboard/AdminLayout";
import { Login } from "../components/dashboard/Login";
import Homeadmin from "../pages/dashboard";
import PrivateRoute from "../components/dashboard/PrivateRoute";
import Settings from "../pages/dashboard/Settings";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      {/* ErrorHandler to error page  */}
      <Route path="/" element={<Layout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorksPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="SingleBlog" element={<SingleBlog />} />
        <Route path="SingleService" element={<SingleService />} />
        <Route path="SingleService2" element={<SingleService2 />} />
        <Route path="SingleService3" element={<SingleService3 />} />

      </Route>
      {/* dashbord routes */}
      <Route path="/admin" element={<AdminLayout />} errorElement={<ErrorHandler />} >
        <Route index element={<Login />} />
        <Route path="home" element={<PrivateRoute><Homeadmin /></PrivateRoute>} />
        <Route path="settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
