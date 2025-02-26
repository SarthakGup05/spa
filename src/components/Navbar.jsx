import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-center px-4 py-2">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <img
                src="/logospa.png"
                className="h-20 w-30"
                alt="Brand Logo"
              />
            </Link>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
