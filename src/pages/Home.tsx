// import cube from "../assets/cube.svg";
// import { FaLink } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      {/* <img src={cube} alt="" /> */}
      <article>
        {/* ANIMATION */}
        {/* md:text-base md:font-medium */}
        <div className="flex items-center justify-center text-xl text-center md:text-3xl px-5 py-5 font-bold mb-4 bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text">
          <TypeAnimation
            sequence={[
              "Shrtn Your Loooong Links :) ",
              1000,
              "Optimize your online experience with our ",
              1000,
              "Advance url shortening solution",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className=""
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
        <div className="flex justify-center flex-col gap-3 items-center  mb-10 mt-10">
          <label htmlFor=""></label>
          <input
            className="px-4 py-2 placeholder:text-sm md:p-4 font-semibold bg-gray-900 text-slate-200 mt-5 w-full md:w-2/5  rounded-full border-solid border border-slate-200 "
            type="text"
            id="text"
            name="text"
            value=""
            placeholder="Enter text here.."
          ></input>{" "}
          <button className="p-2 bg-blue-600 rounded-lg px-5 text-slate-200 font-semibold ">
            {" "}
            <span>Shorten now </span>
          </button>
        </div>
      </form>

      {/* END OF SHORTEN LINK FORM */}

      {/* <div className="flex justify-center items-center mb-10">
        <button className={HomeCSS.urlbtn}>
          {" "}
          <FaLink className={HomeCSS.urlicon} />
          <p className={HomeCSS.urltext}> Enter the link here </p>{" "}
          <button className={HomeCSS.innerbtn}> Shorten now </button>{" "}
        </button>
      </div> */}

      {/* TABLE SECTION  TAILWIND CSS STYLING*/}
      <div className="w-[95%] max-w-5xl mx-auto overflow-x-scroll ">
        <table className="rounded-lg overflow-hidden text-slate-200 border-seperate p-8 border-5 border-solid bg-gray-900 mb-10">
          <tr className="">
            <th className=" bg-gray-700 text-left px-8 py-4">Short Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4">Original Link </th>
            <th className=" bg-gray-700 text-left px-8 py-4"> QR Code </th>
            <th className="bg-gray-700 text-left px-8 py-4"> Clicks</th>
            <th className="bg-gray-700 text-left px-8 py-4">Status</th>
            <th className=" bg-gray-700 text-left px-8 py-4">Date </th>
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
            <td className="text-left px-8 py-4">02-19-2024</td>
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
              <IoQrCodeOutline className=" text-slate-200 text-3xl " />
            </td>
            <td className="text-left px-8 py-4"> 4393</td>
            <td className="text-left px-8 py-4 text-pink-500">inactive </td>
            <td className="text-left px-8 py-4">02-16-2024</td>
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
            <td className="text-left px-8 py-4">02-19-2024</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Home;
