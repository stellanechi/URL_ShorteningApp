// import React from 'react'

import { BsInstagram } from "react-icons/bs";
import {
  FaLink,
  FaLinkedin,
  FaSquareFacebook,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-slate-200">
        <div>
          <div>
            <div className="flex font-black mb-5">
              <span className="text-3xl font-semibold"> Linkly </span>{" "}
            </div>
            {/* END OF LINKLY */}
            <div className="flex  gap-0.5">
              <span>
                {" "}
                <FaTwitter />
              </span>
              <span>
                {" "}
                <BsInstagram />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaSquareFacebook />
              </span>
            </div>
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

export default Footer;
