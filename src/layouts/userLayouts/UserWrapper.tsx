import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UserWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserWrapper;
