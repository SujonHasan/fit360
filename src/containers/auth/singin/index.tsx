/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { AuthWrapper } from "../../../styles/style";
// import { Form, Button, Input } from "react-bootstrap";
import { useSignInMutation } from "@/src/redux/services/auth/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../../assets/images/logo.png";

const Signin = () => {
  const router = useRouter();

  const [signInAction, signInParams] = useSignInMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);

    signInAction({
      data: formData,
      action: () => {

        console.log("hello...................");
        
        const search = window.location.search;
        const params = new URLSearchParams(search);

        const redirect = params.get("redirect");

        console.log("redirect === ", redirect);

        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      },
    });
  };

  return (
    <AuthWrapper>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="auth-contents">
          <form
            onSubmit={handleSubmit}
            className="login-form"
            layout="vertical"
          >
            <h3 style={{ paddingBottom: "40px" }}>
              <Image style={{ width: "150px" }} src={logo} alt="" />
            </h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Username
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email or Username"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-10"
              disabled={signInParams.isLoading}
            >
              {signInParams.isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signin;
