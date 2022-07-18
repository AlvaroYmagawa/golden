import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home.page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};