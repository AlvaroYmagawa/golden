import { Route, Routes } from "react-router-dom";
import { FirsthBirth } from "../pages/FirstBirth/ FirsthBirth/ FirsthBirth.page";
import { HerBirth } from "../pages/HerBirth/HerBirth.page";
import { Home } from "../pages/Home/Home.page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/her-birth" element={<HerBirth />} />
      <Route path="/first-birth" element={<FirsthBirth />} />
    </Routes>
  );
};
