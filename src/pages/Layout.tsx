import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="mt-20">
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
