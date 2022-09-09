import { Route, Routes } from "react-router-dom";
import { FirsthBirth } from "../pages/FirstBirth/ FirsthBirth/ FirsthBirth.page";
import { Home } from "../pages/Home/Home.page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-birth" element={<FirsthBirth />} />
    </Routes>
  );
};
