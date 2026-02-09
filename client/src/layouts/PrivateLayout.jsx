import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateLayout;
