// import cube from "../assets/cube.svg";
import { FaLink } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import HeroCSS from "../components/Home.module.css";

function Home() {
  return (
    <>
      {/* <img src={cube} alt="" /> */}
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
      {/* SHORTEN LINK SECTION */}
      {/* <form action="">
        <div className="flex justify-center items-center mb-10">
          <label htmlFor="name"> </label>
          <input
            type="text"
            id="name"
            name="name"
            value="Enter the link here"
            className={HeroCSS.urlbtn}
          />
        </div>
      </form> */}
      <div className="flex justify-center items-center mb-10">
        <button className={HeroCSS.urlbtn}>
          {" "}
          <FaLink className={HeroCSS.urlicon} />
          <p className={HeroCSS.urltext}> Enter the link here </p>{" "}
          <button className={HeroCSS.innerbtn}> Shorten now </button>{" "}
        </button>
      </div>

      {/* TABLE SECTION  TAILWIND CSS STYLING*/}
      <div className="flex justify-center">
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
        </table>
      </div>
    </>
  );
}
export default Home;
