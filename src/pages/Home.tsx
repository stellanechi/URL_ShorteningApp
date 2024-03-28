// import cube from "../assets/cube.svg";
// import axios from "axios";
import { useState, useEffect } from "react";
// import { IoQrCodeOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import QRCode from "react-qr-code"; // QRCODE
// import CopyToClipboard from "../components/Copy";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "react-toastify";
// import { doc } from "firebase/firestore";
// import { db } from "../firebase/Firebase";
// import { useAuth } from "../context/Context";
// import { Link } from "react-router-dom";
import {
  FieldValue,
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore"; //doc,  setDoc,

import { db } from "../firebase/Firebase";
import { getAuth } from "firebase/auth";

type TableUrl = {
  originalUrl: string;
  shortUrl: string;
  createdAt: FieldValue;
  userId?: string;
  urlId: string;
};

function Home() {
  // const { currentUser } = useAuth(); // FIRESTORE

  const [originalUrl, setOriginalUrl] = useState("");
  // const [shortenedUrl, setShortenedUrl] = useState("");
  const [errorMessage] = useState(""); //setErrorMessage
  // const [showQRCode, setShowQRCode] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // DATE
  const [tableData, setTableData] = useState<TableUrl[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { currentUser } = getAuth();
  const linksCollection = collection(db, "links");

  // START OF REAL TIME DATE
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000); // Update every second

  //   return () => clearInterval(intervalId); // Cleanup
  // }, []);
  // END OF REAL TIME DATE
  console.log(loading);
  console.log(setCurrentDate);

  useEffect(() => {
    const getUrls = async () => {
      try {
        setLoading(true);

        if (currentUser?.uid) {
          const q = query(
            linksCollection,
            where("userId", "==", currentUser.uid)
          );
          const urls = await getDocs(q);
          const urlsData = urls.docs.map((url) => {
            return {
              ...url.data(),
              urlId: url.id,
            };
          });

          setTableData(urlsData as TableUrl[]);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Error fetching url datas");
      }
    };
    getUrls();
  }, []);

  // START OF URL SHORTENING LOGIC
  const shortenUrl = async (longLink: string) => {
    // e.preventDefault();
    const url = "https://url-shortener-service.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "565357b69fmsh70f957ad1c49784p14afbajsn8b1b3fc87b48",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: longLink,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.result_url;
      // console.log(result);
      // setShortenedUrl(result.result_url);
      // setShowQRCode(true);
    } catch (error) {
      toast.error("error shortening url");
      console.error(error);
    }
  };

  const saveUrlToDb = async () => {
    if (!originalUrl) {
      toast.error("Feild can not be empty");

      return;
    }

    if (!currentUser) {
      toast.error("user not authorized");
      return;
    }
    setSubmitting(true);

    console.log("collection", linksCollection);
    const linkQuery = query(
      linksCollection,
      where("originalUrl", "==", originalUrl)
    );
    const linkData = await getDocs(linkQuery);
    console.log("linksss Docs", {
      docs: linkData.docs,
      empty: linkData.empty,
    });

    if (!linkData.empty) {
      toast.error("Url already Shortened");
      setSubmitting(false);
      return;
    }

    const shortCode = await shortenUrl(originalUrl);
    if (!shortCode) {
      toast.error("Couldn't get Short Code");
      setSubmitting(false);
      return;
    }
    const urlData = {
      originalUrl,
      shortUrl: shortCode,
      createdAt: serverTimestamp(),
      userId: currentUser?.uid,
    };

    try {
      const savedUrl = await addDoc(linksCollection, urlData);
      if (savedUrl) {
        const newTableData = [
          {
            ...urlData,
            urlId: savedUrl.id,
          },
          ...tableData,
        ];
        setTableData(newTableData);
      }
      console.log(savedUrl, "savedUrl ==>");
      setSubmitting(false);
    } catch (err) {
      console.error("Failed to write user data to Firestore:", err);
      toast("An error occurred saving Url data.");
      setSubmitting(false);
    }
  };
  // END OF SHORTENING LOGIC
  return (
    <>
      <article>
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

        <span className=" flex justify-center items-center text-center text-slate-200">
          {" "}
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your <br /> online experience
        </span>
      </article>
      {/* SHORTEN LINK SECTION */}
      <form
        className="px-5"
        onSubmit={(e) => {
          e.preventDefault();
          saveUrlToDb();
        }}
      >
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
            // type="button"
            className="px-4 py-2 md:px-5 md:py-3 mt-1  md:mt-4 w-[40%] md:w-[15%] text-sm md:text-xl bg-blue-600 rounded-lg  text-slate-200 font-semibold "
          >
            {" "}
            {submitting ? "Shortening Url..." : <span>Shorten URL</span>}
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

      {/* TABLE SECTION  TAILWIND CSS STYLING  max-w-7xl */}
      <div className="w-[100%] md:w-[100%] max-w-[90%] mx-auto overflow-x-scroll  ">
        <table className=" w-full rounded-lg overflow-hidden text-slate-200 border-seperate p-12 border-5 border-solid bg-gray-900 mb-10">
          <thead>
            <tr className="">
              <th className=" bg-gray-700 text-left px-8 py-4">Short Link </th>
              <th className=" bg-gray-700 text-left px-8 py-4">
                Original Link{" "}
              </th>
              <th className=" bg-gray-700 text-left px-8 py-4"> QR Code </th>
              <th className="bg-gray-700 text-left px-8 py-4"> Clicks</th>
              <th className="bg-gray-700 text-left px-8 py-4">Status</th>
              <th className=" bg-gray-700 text-left px-8 py-4">Date </th>
            </tr>
          </thead>

          <tbody>
            {tableData.length > 0
              ? tableData.map((tData) => {
                  return (
                    <tr key={tData.urlId}>
                      <>
                        <td className="flex gap-4 text-left px-2 py-4">
                          {tData.shortUrl}
                          <MdOutlineContentCopy className="w-[35px] h-6" />
                        </td>
                        <td className="text-left px-2 py-2 whitespace-nowrap  ">
                          {/* w-[100%] min-w-0 */} {tData.originalUrl}
                        </td>
                        {/* QRCODE */}
                        <td className=" ">
                          {/* <div className="mx-auto max-w-[64px] w-full"> */}
                          <QRCode
                            className="hover:scale-150 duration-1000 w-[12%]"
                            // size={256}
                            viewBox={`0 0 256 256`}
                            value={tData.shortUrl}
                            // className=" text-slate-200 text-3xl"
                          />{" "}
                          {/* </div> */}
                        </td>
                        {/* END OF QRCODE */}
                        <td className="text-left px-3 py-4"> 4</td>
                        <td className="text-left px-3 py-4 text-emerald-400">
                          Active{" "}
                        </td>
                        <td className="text-left px-2 py-3">
                          {" "}
                          {currentDate.toDateString()}{" "}
                        </td>
                      </>
                    </tr>
                  );
                })
              : null}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Home;

{
  // QRCODE
  /* <QRCode
                            value={tData.shortUrl}
                            className=" text-slate-200 text-3xl"
                          />{" "} */
  /* <tr>
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
            </tr> */
}
