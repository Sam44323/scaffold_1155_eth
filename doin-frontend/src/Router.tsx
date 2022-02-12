import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNft from "./pages/AddNft";
import Profile from "./pages/Profile";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/add" element={<AddNft />} />
    </Routes>
  );
};

export default Router;
