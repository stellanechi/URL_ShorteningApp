import React from "react";
import HeroCSS from "./HeroSection.module.css";
import cube from "../assets/cube.svg";
import { FiLogOut } from "react-icons/fi";

function HeroSection() {
  return (
    <>
      <main>
        {/* <img src={cube} alt="" /> */}
        <nav>
          <label htmlFor=""> LINKLY </label>
          <ul className={HeroCSS.navparent}>
            <li className={HeroCSS.login}>
              <a href="#">
                <button>
                  {" "}
                  Login <FiLogOut />
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
    </>
  );
}
export default HeroSection;
