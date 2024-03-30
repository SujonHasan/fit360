"use client";

import Link from "next/link";
import { useState } from "react";
import CustomLink from "./CustomLink";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar my-3 fs-4  navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fs-3" href="/">
          Fit360
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          } text-right`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <CustomLink path={"/"}>Home</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink path={"/work-space/products"}>Products</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink path={"/clients/vendors"}>Vendors</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
