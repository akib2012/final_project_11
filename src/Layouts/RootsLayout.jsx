import React from "react";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router";

const RootsLayout = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootsLayout;
