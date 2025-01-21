import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import FooterComp from './FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainDashBoardComp = () => {
  return (
    <div className="d-flex flex-column vh-100">
    
      <header className="bg-primary text-white">
        <NavbarComp />
      </header>
      
      
      <main className="flex-grow-1 overflow-auto">
        <div>
          
        </div>
        <div className="container py-4">
       
          <Outlet />
        </div>
      </main>
      
  
      <footer className="bg-light text-center py-3 border-top">
        <FooterComp />
      </footer>
    </div>
  );
};

export default MainDashBoardComp;
