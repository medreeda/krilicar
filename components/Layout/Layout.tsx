"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../Sidebar/Sidebarr";
import TopNav from "../TopNav/TopNav";
import NavBar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <div className="layout">
      {/* ✅ إظهار Navbar فقط إذا لم تكن صفحة أدمن */}
      {!isAdminPage && <NavBar showNavbar={true} />}

      <div className="flex">
        {/* ✅ إظهار Sidebar فقط إذا لم تكن صفحة أدمن */}
        {!isAdminPage && <Sidebar />}

        <div className={`main_layout flex-1 ${isAdminPage ? "h-screen" : "pt-[80px]"}`}>
          <TopNav />
          <div className="content">{children}</div>
        </div>
      </div>

      {/* ✅ إظهار Footer فقط إذا لم تكن صفحة أدمن */}
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default Layout;
