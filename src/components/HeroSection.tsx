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
                <button>Sign up</button>
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
      <div className="flex justify-center items-center mb-10">
        <button className={HeroCSS.urlbtn}>
          {" "}
          <FaLink className={HeroCSS.urlicon} />
          <p className={HeroCSS.urltext}> Enter the link here </p>{" "}
          <button className={HeroCSS.innerbtn}> Shorten now </button>{" "}
        </button>
      </div>
      {/* TABLE SECTION  TAILWIND CSS STYLING*/}
      <div className="flex justify-center">
        <table className=" w-20 text-slate-200 border-seperate p-8 border-5 border-solid bg-gray-900 mb-10">
          <tr>
            <th className=" bg-gray-700 text-left px-8 py-4">Short Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4">Original Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4"> QR Code </th>
            <th className="bg-gray-700 text-left px-8 py-4"> Clicks</th>
            <th className="bg-gray-700 text-left px-8 py-4">Status</th>
            <th className=" bg-gray-700 text-left px-8 py-4">Date </th>
          </tr>
          <tr className="text-left px-8 py-4">
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
          </tr>
          <tr className="text-left px-8 py-4">
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
          </tr>
          <tr className="text-left px-8 py-4">
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
            <td>Alfreds Futterkiste</td>
            <td>Dante Sparks</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default HeroSection;
