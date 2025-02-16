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
      <NavBar />
      <Sidebar />
      <div className="main__layout">
        <TopNav />
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
