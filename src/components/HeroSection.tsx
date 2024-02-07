import React from "react";
import HeroCSS from "./HeroSection.module.css";
import cube from "../assets/cube.svg";

function HeroSection() {
  return (
    <>
      <main>
        <img src={cube} alt="" />
        <nav>
          <ul className={HeroCSS.navparent}>
            <li>
              <a href="#">Linky</a>
            </li>
            <li className="">
              <a href="#">
                <button> Login </button>
              </a>
            </li>
            <li className="">
              <a href="#">
                <button>Register Now</button>
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
export default HeroSection;
