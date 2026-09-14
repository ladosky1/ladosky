import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function SiteLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default SiteLayout;