import React from "react";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazLayout Page</h1>

      {/* rutas hijas iran aqui */}

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 1 </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPages1 />} />
        <Route path="lazy2" element={<LazyPages2 />} />
        <Route path="lazy3" element={<LazyPages3 />} />
        <Route
          path="*"
          element={
            <Navigate to='lazy1'  replace/>
          }
        />
      </Routes>
    </div>
  );
};

export default LazyLayout;
