import { FaLink } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoQrCodeOutline } from "react-icons/io5";
import { SiAlwaysdata } from "react-icons/si";

function About() {
  return (
    <>
      <div className="bg-slate-200 ">
        <div className="flex w-100  h-32 bg-gray-900 mb-20  text-slate-200 p-5  tracking-tight place-content-around font-semibold">
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
          <div className="flex  place-content-around ">
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
                <FaLink className=" text-blue-500 text-xl mb-6 " />
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
                <FaRegPenToSquare className=" text-blue-500 text-xl mb-6 " />
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
          <div className="flex justify-end mt-14 gap-10 mr-32">
            {/* QR CODE */}
            <div>
              <IoQrCodeOutline className=" text-blue-500 text-xl  mb-6" />
              <h1 className="text-xl mb-4">
                {" "}
                <strong> QR Codes </strong>
              </h1>
              <p>
                {" "}
                Generate QR codes to your business, events, <br />
                bring your audience and customers to your <br />
                doorstep with this scan and go solution.
              </p>
            </div>
            {/* DATA ANALYTICS */}
            <div>
              <SiAlwaysdata className=" text-blue-500 text-xl mb-6 " />
              <h1 className="text-xl mb-4">
                {" "}
                <strong> Data Analytics</strong>
              </h1>
              <p>
                {" "}
                Recieve data on the usage of either your <br />
                shortened URL, custom URLs or generated QR <br />
                codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default About;
