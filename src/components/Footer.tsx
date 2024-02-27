// import React from 'react'

import { BsInstagram } from "react-icons/bs";
import { FaLink, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-slate-200">
        <div>
          <div>
            <div className="flex">
              <div className="mt-3 text-xl">
                {" "}
                <FaLink />
              </div>{" "}
              <div>
                <span className="text-3xl font-semibold"> Linkly </span>
              </div>{" "}
            </div>
            {/* END OF LINKLY */}
            <div>
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
              <span></span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
    // <div> <div> </FaLink> </div> <div> </div></div>
  );
}

export default Footer;
