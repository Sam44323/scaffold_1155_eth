import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/user" element={<Profile />} />
    </Routes>
  );
};

export default Router;
