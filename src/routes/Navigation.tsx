import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponent,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React-logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-yup-page"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik yup page
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-component"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Component
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {" "}
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup-page" element={<FormikYupPage />} />
          <Route path="/formik-component" element={<FormikComponent />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
