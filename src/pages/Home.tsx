// import cube from "../assets/cube.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoQrCodeOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import QRCode from "react-qr-code";
// import CopyToClipboard from "../components/Copy";
import { MdOutlineContentCopy } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { toLocalString } from "date-fns";

function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // DATE

  // START OF REAL TIME DATE
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup
  }, []);
  // END OF REAL TIME DATE
  // START OF URL SHORTENING LOGIC
  const shortenUrl = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: originalUrl,
        },
        {
          headers: {
            Authorization: "37f00163763548490c08f21f868cfba0e7de6325",
            "Content-Type": "application/json",
          },
        }
      );

      setShortenedUrl(response.data.id);
      setShowQRCode(true);
    } catch (error) {
      console.error("Error shortening URL:", error.response.data);
      setErrorMessage("Error shortening URL. Please try again.");
    }
    // ERROR TRIAL
    // } catch (error) {
    //   if (typeof error === "string") {
    //     console.error("Error shortening URL:", error);
    //     setErrorMessage("Error shortening URL. Please try again.");
    //   } else if (error.response && error.response.data) {
    //     console.error("Error shortening URL:", error!.response.data);
    //     setErrorMessage("Error shortening URL. Please try again.");
    //   } else {
    //     console.error("Unknown error occurred:", error);
    //     setErrorMessage("Unknown error occurred. Please try again.");
    //   }
    // }
    // END OF ERROR TRIAL
  };
  // END OF URL SHORTENING LOGIC
  return (
    <>
      <article>
        {/* ANIMATION */}
        <div className="flex items-center justify-center text-lg text-center md:text-2xl px-5 pt-20 font-bold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          <TypeAnimation
            sequence={[
              "Shrtn Your Loooong Links :) ",
              1000,
              "Easy way to make a link short with lots of advantages ",
              1000,
              "Optimize your online experience with our ",
              1000,
              "Advance url shortening solution ",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ display: "inline-block", fontSize: "2em" }}
            repeat={Infinity}
            className="text-xl md:text-5xl"
          />
        </div>
        {/* END OF ANIMATION */}
        <span className=" flex justify-center items-center text-center text-slate-200">
          {" "}
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your <br /> online experience
        </span>
      </article>
      {/* SHORTEN LINK SECTION */}
      <form className="px-5" action="">
        <div className="flex justify-center flex-col md:flex-row gap-3 items-center  mb-8 mt-2">
          <label htmlFor=""></label>
          <input
            className="px-4 py-2 placeholder:text-sm md:placeholder:text-xl md:p-4 font-semibold bg-slate-300 text-gray-500 mt-5 w-full md:w-[37%]  rounded-lg border-solid  "
            type="text"
            id="text"
            name="text"
            placeholder="Enter link here.."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          ></input>{" "}
          <button
            onClick={shortenUrl}
            className="px-4 py-2 md:px-5 md:py-3 mt-1  md:mt-4 w-[40%] md:w-[15%] text-sm md:text-xl bg-blue-600 rounded-lg  text-slate-200 font-semibold "
          >
            {" "}
            <span>Shorten URL</span>
          </button>
          {/* QRCODE */}
          {/* <div>
            {showQRCode ? (
              <>
                <p> {originalUrl}</p>
                <p>
                  {" "}
                  <Link to="">Shortened URL: {shortenedUrl}</Link>
                </p>
                <QRCode value={shortenedUrl} />
              </>
            ) : null}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div> */}
          {/*  COMMENTED OUT */}
        </div>
      </form>
      {/* END OF SHORTEN LINK FORM */}

      {/* TABLE SECTION  TAILWIND CSS STYLING */}
      <div className="w-[100%] md:w-[100%] max-w-7xl mx-auto overflow-x-scroll  ">
        <table className=" rounded-lg overflow-hidden text-slate-200 border-seperate p-12 border-5 border-solid bg-gray-900 mb-10">
          <tr className="">
            <th className=" bg-gray-700 text-left px-8 py-4">Short Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4">Original Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4"> QR Code </th>
            <th className="bg-gray-700 text-left px-8 py-4"> Clicks</th>
            <th className="bg-gray-700 text-left px-8 py-4">Status</th>
            <th className=" bg-gray-700 text-left px-8 py-4">Date </th>
          </tr>

          <tr>
            {showQRCode ? (
              <>
                <td className="flex gap-4 text-left px-8 py-4">
                  {shortenedUrl}{" "}
                  <MdOutlineContentCopy className="w-[35px] h-6" />
                </td>
                <td className="text-left px-8 py-4 "> {originalUrl}</td>
                <td className="text-left">
                  <QRCode
                    value={shortenedUrl}
                    className=" text-slate-200 text-3xl w-[20%] "
                  />{" "}
                </td>
                <td className="text-left px-8 py-4"> 4</td>
                <td className="text-left px-8 py-4 text-emerald-400">
                  Active{" "}
                </td>
                <td className="text-left px-8 py-4">
                  {" "}
                  {currentDate.toDateString()}{" "}
                </td>
              </>
            ) : null}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </tr>

          <tr>
            <td className="text-left px-8 py-4">
              https://blog.logrocket.com/building
            </td>
            <td className="text-left px-8 py-4">
              https://blog.logrocket.com/building-tailwind-cs
            </td>
            <td className="text-left px-8 py-4">
              {" "}
              <IoQrCodeOutline className=" text-slate -200 text-3xl " />
            </td>
            <td className="text-left px-8 py-4"> 1313</td>
            <td className="text-left px-8 py-4 text-pink-500 ">Inactive </td>
            <td className="text-left px-8 py-4">Tue Mar 12 2024</td>
          </tr>
          <tr>
            <td className="text-left px-8 py-4">
              https://blog.logrocket.com/building
            </td>
            <td className="text-left px-8 py-4">
              https://blog.logrocket.com/building-tailwind-cs
            </td>
            <td className="text-left px-8 py-4">
              {" "}
              <IoQrCodeOutline className=" text-slate -200 text-3xl " />
            </td>
            <td className="text-left px-8 py-4"> 1313</td>
            <td className="text-left px-8 py-4 text-emerald-400 ">Active </td>
            <td className="text-left px-8 py-4">Sun Mar 10 2024</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Home;
