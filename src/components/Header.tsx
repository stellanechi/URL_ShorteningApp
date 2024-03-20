import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
import { auth } from "../firebase/Firebase";
import { signOut } from "firebase/auth";
import { PiSignOutBold } from "react-icons/pi";

function Header() {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  const { currentUser } = useAuth(); // SIGNOUT

  //  SIGNOUT

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("signOut");
    } catch (error) {
      console.log("error");
    }
  };
  // END OF SIGNOUT
  return (
    <div>
      {" "}
      <nav className="flex justify-between p-8 md:p-6 items-center  bg-gray-900 fixed top-0 w-full z-50">
        <Link
          className=" text-2xl md:text-4xl font-bold md:font-black bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          {" "}
          LINKLY{" "}
        </Link>
        <ul className="hidden md:flex item-center gap-6 text-slate-200 text-lg">
          <li className="font-semibold hover:text-blue-500 ">
            {" "}
            <Link to="/about"> ABOUT </Link>{" "}
          </li>
          <li className="font-semibold hover:text-blue-500">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="font-semibold hover:text-blue-500">
            <Link to="/pricing">PRICING</Link>
          </li>
        </ul>
        {/* START OF SIGNOUT BUTTON */}

        {!currentUser ? (
          <>
            {" "}
            <li className=" hidden sm:block font-semibold border-none p-2 bg-pink-500 hover:text-blue-300 rounded-lg -mt-1 text-lg">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="hidden sm:block font-semibold border-none p-2 bg-blue-700 hover:text-blue-300 rounded-lg -mt-1 text-lg">
              <Link to="/signup">SIGNUP</Link>
            </li>{" "}
          </>
        ) : (
          <div className="flex  gap-3">
            {" "}
            {/* CURRENT USER IMAGE AND DISPLAY NAME */}
            <li className="flex items-start gap-2">
              {" "}
              <span className="text-lg font-semibold">
                {" "}
                {currentUser.displayName}
              </span>{" "}
              <img
                src={currentUser.photoURL!}
                className="w-10 h-10 rounded-full object-cover"
                alt=""
              />{" "}
              {/* END OF CURRENT USER IMAGE AND DISPLAY NAME */}
            </li>
            <div className="flex gap-2 font-semibold border-none p-2 px-2 bg-slate-200 hover:text-blue-300 rounded-lg -mt-1 text-red-400">
              <p onClick={logOut}>LOGOUT </p>{" "}
              <span>
                {" "}
                <PiSignOutBold className="mt-1" />
              </span>
            </div>
          </div>
        )}
        {/* END OF SIGNOUT BUTTONS */}

        {/* HAMBURGER */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {nav ? (
            <FaTimes className="text-slate-200" size={28} />
          ) : (
            <GiHamburgerMenu className=" text-slate-200 " size={28} />
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
