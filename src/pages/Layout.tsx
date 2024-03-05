import { Outlet, Link } from "react-router-dom";
import LayoutCSS from "../components/Layout.module.css";
import Footer from "../components/Footer";
// import { FiLogOut } from "react-icons/fi";

function Layout() {
  return (
    <>
      <nav className={LayoutCSS.nav}>
        <Link className={LayoutCSS.logo} to="/">
          {" "}
          LINKLY{" "}
        </Link>
        <ul className={LayoutCSS.navul}>
          <li className="text-slate-200 text-base font-medium mt-3 hover:text-slate-400">
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="text-slate-200 text-base font-medium mt-3 hover:text-slate-400">
            <Link to="/faq">
              <span>FAQ</span>
            </Link>
          </li>
          <li className="text-slate-200 text-base font-medium mt-3 hover:text-slate-400">
            <Link to="/pricing">
              <span> Pricing </span>
            </Link>
          </li>
          <li className="text-slate-200 text-base font-medium mt-3 hover:text-slate-400">
            <Link to="/login">
              <span> Login </span>
            </Link>
          </li>

          <li className={LayoutCSS.signup}>
            <Link to="/signup">
              <button>Free Sign up</button>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="mt-20">
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
