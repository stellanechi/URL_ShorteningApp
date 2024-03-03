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
      <footer>
        <div className="bg-slate-200 ">
          <div className="flex gap-20 justify-center ">
            <div className="mt-10">
              <div className="flex font-black mb-5">
                <h1 className="text-3xl font-black"> Linkly </h1>{" "}
              </div>
              {/* END OF LINKLY */}
              <div className="flex  gap-4">
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
            {/* START OF FLEX ELEMENT */}
            <div className="flex  gap-16 mt-10 ">
              {/* ONE */}
              <div>
                <h1 className="text-xl font-medium mb-4"> Why Linkly </h1>
                <p>
                  {" "}
                  Integrations & Api <br />
                  Pricing
                </p>
              </div>
              {/* TWO */}
              <div>
                <h1 className="text-xl font-medium mb-4"> Solutions </h1>
                <p>
                  {" "}
                  Social Media <br />
                  Digital Marketing <br />
                  Customer Service <br />
                  For Developers
                </p>
              </div>
              {/* THREE */}
              <div>
                <h1 className="text-xl font-medium mb-4"> Products </h1>
                <p>
                  {" "}
                  Link management
                  <br />
                  QR Code <br />
                  Link-in-bio
                </p>
              </div>
              {/* FOUR */}
              <div>
                <h1 className="text-xl font-medium mb-4 "> Company</h1>
                <p>
                  {" "}
                  About Linkly <br />
                  Carrers <br />
                  Partners <br />
                  Press <br />
                  Contact <br />
                  Reviews
                </p>
              </div>
            </div>
          </div>{" "}
          {/* LAST SECTION */}
          {/* <div className=" flex gap-16 mt-10">
            ONE
            <div>
              <h1 className="text-xl font-medium mb-4 "> Resources</h1>
              <p>
                {" "}
                Blog <br />
                Resource Library
                <br />
                Developer <br />
                App Connectors
                <br />
                Support <br />
                Trust Center <br />
                Browser Extension <br />
                Mobile App
              </p>
            </div>
            TWO
            <div>
              <h1 className="text-xl font-medium mb-4 "> Features</h1>
              <p>
                {" "}
                Brand Links <br />
                Mobile Links
                <br />
                Campain <br />
                Management & Analytics <br />
                QR Code Generation
              </p>
            </div>
            THREE
            <div>
              <h1 className="text-xl font-medium mb-4 "> Legal</h1>
              <p>
                {" "}
                Privacy Policy <br />
                Cookie Policy
                <br />
                Terms of Service <br />
                Acceptable Use Policy
                <br />
                Code of Conduct
              </p>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
