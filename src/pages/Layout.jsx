import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Navmobile from "../components/Navmobile";
import WhatsappChatPlugin from "../components/WhatsappChatPlugin";

const Layout = () => {
  return (
    <>
    <header className=" "><Navbar /></header>
    {/* <header className="d-flex justify-content-center d-md-none "><Navmobile /></header> */}
      <ScrollToTop/>
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <WhatsappChatPlugin />
      <Footer />
    </>
  );
};

export default Layout;
