import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNft from "./pages/AddNft";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/user" element={<Profile />} />
      <Route path="/add" element={<AddNft />} />
    </Routes>
  );
};

export default Router;
