import { Outlet, Link } from "react-router-dom";
import HeroCSS from "../components/HeroSection.module.css";
import { FiLogOut } from "react-icons/fi";

function Layout() {
  return (
    <>
      <nav className={HeroCSS.navmain}>
        <Link className={HeroCSS.logo} to="/">
          {" "}
          LINKLY{" "}
        </Link>
        <ul className={HeroCSS.ulmain}>
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
          <li className={HeroCSS.login}>
            <Link to="/login">
              <button className={HeroCSS.loginicon}>
                {" "}
                <span> Login </span> <FiLogOut />
              </button>
            </Link>
          </li>

          <li className={HeroCSS.signup}>
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
    </>
  );
}

export default Layout;
