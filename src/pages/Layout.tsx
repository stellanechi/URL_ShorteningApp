import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// import { useState } from "react";

function Layout() {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  return (
    <>
      <nav className="flex justify-between p-5 items-center  bg-gray-900">
        <Link
          className="text-4xl bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          {" "}
          LINKLY{" "}
        </Link>
        <ul className="hidden md:flex gap-6 text-slate-200">
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        {/* HAMBURGER */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {nav ? (
            <FaTimes className="text-slate-200" size={25} />
          ) : (
            <GiHamburgerMenu className="text-slate-200" size={25} />
          )}
          {/*  */}
        </div>
        {/* MOBILE MENU */}
        <ul
          className={`${
            nav
              ? "text-slate-200 opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-y-full"
          } transition-transform absolute top-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-start items-center text-2xl
          }`}
          onClick={() => SetNav(false)}
        >
          <li className="p-2 hover:text-blue-500">
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li className="p-2 hover:text-blue-500">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="p-2 hover:text-blue-500">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="p-2 hover:text-blue-500">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2 hover:text-blue-500">
            <Link to="/signup">Signup</Link>
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

{
  /* OLD NAVIGATION */
}
{
  /* <nav className={LayoutCSS.nav}>
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
      </nav> */
}
