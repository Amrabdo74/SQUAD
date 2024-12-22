import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar from "./Navbar";
import Aside from "./Aside";

const AdminLayout = () => {
  const [isAuthenticated, seyisAuthenticated] = useState(false);
  return (
    <>
      <ScrollToTop />
      <main className="overflow-hidden d-flex" style={{direction:"rtl"}}>
        {isAuthenticated && <Aside />}
        <div className="d-flex flex-column w-100" style={{background:"rgb(244, 247, 254)"}}>
          {isAuthenticated && (
            <header>
              <Navbar />
            </header>
          )}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
