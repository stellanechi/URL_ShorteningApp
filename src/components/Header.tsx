import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  return (
    <div>
      {" "}
      <nav className="flex justify-between p-6 items-center  bg-gray-900 fixed top-0 w-full z-50">
        <Link
          className=" text-lg md:text-4xl font-bold md:font-black bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          {" "}
          LINKLY{" "}
        </Link>
        <ul className="hidden md:flex gap-6 text-slate-200">
          <li className="font-semibold">
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li className="font-semibold">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="font-semibold">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="font-semibold border-none p-3 bg-blue-700 rounded-full -mt-3">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        {/* HAMBURGER */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {nav ? (
            <FaTimes className="text-slate-200" size={25} />
          ) : (
            <GiHamburgerMenu className=" p-4 bg-slate-200 " size={25} />
          )}
          {/*  */}
        </div>
        {/* MOBILE MENU */}
        {/* text-slate-200 */}
        <ul
          className={`${
            nav
              ? "text-slate-200 opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-y-full"
          } transition-transform duration-500 absolute inset-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center text-2xl
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
    </div>
  );
}

export default Header;
