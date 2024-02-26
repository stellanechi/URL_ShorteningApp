import { Outlet, Link } from "react-router-dom";
import HomeCSS from "../components/Home.module.css";
// import { FiLogOut } from "react-icons/fi";

function Layout() {
  return (
    <>
      <nav className={HomeCSS.navmain}>
        <Link className={HomeCSS.logo} to="/">
          {" "}
          LINKLY{" "}
        </Link>
        <ul className={HomeCSS.ulmain}>
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
          <li className={HomeCSS.login}>
            <Link to="/login">
              <button className={`hover:text-slate-400 ${HomeCSS.loginicon}`}>
                {" "}
                <span> Login </span>
              </button>
            </Link>
          </li>

          <li className={HomeCSS.signup}>
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
      <div className="bg-slate-200">
        <div>
          <div>
            {" "}
            <h1 className="text-xl"> Linkly </h1>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Layout;
