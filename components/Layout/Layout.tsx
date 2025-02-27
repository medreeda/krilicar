import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebarr';
import TopNav from '../TopNav/TopNav';
import NavBar from '../Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar showNavbar={true} />
      <div className="flex">
       
        <Sidebar />
        <div className="main__layout flex-1 pt-[80px]">
          <TopNav />
          <div className="content">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
