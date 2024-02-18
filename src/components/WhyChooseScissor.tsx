// import React from "react";

import { FaLink } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

function WhyChooseScissor() {
  return (
    <>
      <div className="flex w-100 h-32 bg-slate-900 mb-10 text-slate-300 p-5  tracking-tight place-content-around font-semibold">
        <div>
          {" "}
          <h1 className="text-2xl">
            {" "}
            One Stop. <br /> Four
            <span className="text-blue-500 "> Possibilities </span> .{" "}
          </h1>
        </div>
        <div>
          {" "}
          <h1>
            {" "}
            <span className="text-2xl"> 30M </span>
            <br />
            Active Users{" "}
          </h1>
        </div>
        <div>
          {" "}
          <h1>
            <span className="text-2xl"> 60M</span> <br /> Links & QR <br />{" "}
            codes created{" "}
          </h1>
        </div>
        <div>
          {" "}
          <h1>
            {" "}
            <span className="text-2xl"> 1B </span> <br />
            Clicked & scanned <br />
            connections
          </h1>
        </div>
        <div>
          {" "}
          <h1>
            {" "}
            <span className="text-2xl"> 300k </span> <br /> App integrations{" "}
          </h1>
        </div>
      </div>
      {/* WHY CHOOSE LINKLY */}
      <article>
        <div className="flex  place-content-around text-slate-200 ">
          <div>
            <h1 className="text-2xl mb-4">
              <strong>
                {" "}
                Why Choose <span className="text-blue-500"> Linky </span>{" "}
              </strong>{" "}
            </h1>
            <p>
              {" "}
              Linkly is the hub of everything that has to do <br />
              with your link management. We shorten your URLs, <br />
              allow you creating custom ones for your personal, <br />
              business, event usage. Our swift QR code <br />
              creation, management and usage tracking with <br />
              advance analytics for all of these is second to <br />
              none.{" "}
            </p>
          </div>
          {/* URL SHORTENING */}
          <div className="flex gap-10">
            <div>
              {" "}
              <FaLink className=" text-slate-500 " />
              <h1 className="text-xl mb-4">
                {" "}
                <strong> URL Shortening </strong>
              </h1>
              <p>
                {" "}
                Linkly allows you to shorten URLs of your <br />
                business, events. Shorten your URL at scale, <br />
                URL redirects.
              </p>
            </div>
            {/* CUSTOM URL */}
            <div>
              {" "}
              <FaRegPenToSquare className=" text-slate-500 " />
              <h1 className="text-xl mb-4">
                {" "}
                <strong> Custom URLs </strong>
              </h1>
              <p>
                {" "}
                With linkly, you can create custom URLs <br />
                with the lenght you want! A solution for socials <br />
                and businesses.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WhyChooseScissor;
