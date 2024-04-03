"use client";

import Link from "next/link";
import { useState } from "react";
import { Constants } from "../utils/constnts";
import CustomLink from "./CustomLink";
import { useLogOutMutation } from "../redux/services/auth/api";
import { redirect, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = localStorage.getItem(Constants.USER_INFO);

  const router = useRouter();

  const [logOut] = useLogOutMutation();

  // console.log("user Info ===  ", userInfo);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleOnclick = () => {
    logOut({ action: () => router.push("/signin") });
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

          {userInfo ? <h1> {userInfo.firstName} </h1> : ""}

          {userInfo ? (
            <Link
              href={""}
              className="text-decoration-none text-danger"
              onClick={handleOnclick}
            >
              Logout
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
