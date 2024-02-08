import React from "react";
import HeroCSS from "./HeroSection.module.css";
import cube from "../assets/cube.svg";

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
                <button> Login </button>
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
      </article>
    </>
  );
}
export default HeroSection;
