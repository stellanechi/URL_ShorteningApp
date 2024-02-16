import HeroCSS from "./HeroSection.module.css";
// import cube from "../assets/cube.svg";
import { FiLogOut } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <main>
        {/* <img src={cube} alt="" /> */}
        <nav className={HeroCSS.navmain}>
          <label htmlFor=""> LINKLY </label>
          <ul className={HeroCSS.ulmain}>
            <li className={HeroCSS.login}>
              <a href="#">
                <button className={HeroCSS.loginicon}>
                  {" "}
                  <span> Login </span> <FiLogOut />
                </button>
              </a>
            </li>

            <li className={HeroCSS.signup}>
              <a href="">
                <button>Register Now</button>
              </a>
            </li>
          </ul>
        </nav>
      </main>
      {/* ARTICLE SECTION */}
      <article>
        <h1 className={HeroCSS.short}>
          <strong> Shorten Your Loooong Links :) </strong>
        </h1>
        <span className={HeroCSS.para}>
          {" "}
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your <br /> online experience
        </span>
      </article>
      {/* SHORTEN LINK SECTION */}
      <div className="flex justify-center items-center mb-40">
        <button className={HeroCSS.urlbtn}>
          {" "}
          <FaLink className={HeroCSS.urlicon} />
          <p className={HeroCSS.urltext}> Enter the link here </p>{" "}
          <button className={HeroCSS.innerbtn}> Shorten now </button>{" "}
        </button>
      </div>
    </>
  );
}
export default HeroSection;
