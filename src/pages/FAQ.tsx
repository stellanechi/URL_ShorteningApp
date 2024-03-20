// import React from "react";
// import { FaPlus } from "react-icons/fa6";
import Question from "../components/Question";

const FAQPage = () => {
  return (
    <div className=" bg-slate-200 pt-16 p-8">
      {/* <div className="  mx-auto mt-8 px-4 "> */}
      <h1 className="flex justify-center text-xl text-center md:text-4xl font-bold mb-8">
        {" "}
        FAQs
      </h1>
      {/* <div className=" bg-red-400 ">  md:ml-[30%] md:w-[90%]*/}
      <div className="md:ml-[26%] md:w-[100%] ">
        <Question
          question="How does URL shortning work?"
          answer="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the  original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
        />
        <Question
          question="How do I change a long URL to a short URL?"
          answer="To shorten a URL, you'll need a service like RB.GY. First, copy the long URL you want to shorten. Then, access the URL shortener tool. Paste your long URL into the appropriate field, then click Shorten it will instantly generate a shortened version of your original URL, which leads to the same page when clicked."
        />
        <Question
          question="What are the benefits of a short URL?"
          answer="When you choose to shorten a URL, you're optimizing your digital content in several ways. Short URLs are more manageable and tidy, fitting neatly into character-limited spaces like tweets or Instagram bios. They are also simpler to remember and type manually. Moreover, many URL shorteners include tracking capabilities, offering vital data on link engagement – a crucial tool for businesses and marketing campaigns. Finally, short URLs can be customized for increased brand recognition and user trust."
        />
        <Question
          question="Do I have to install Linky on my website?"
          answer="No. Linkly is a web-based service requiring no software to install or code to write. After signing up, you will be ready to start branding and shortening links right away. No tech skills are required!"
        />
        <Question
          question="Are the shortened links permanent? will they expire?"
          answer=""
        />
        <Question
          question="Are there any limitations on the number of URL I can shorten?"
          answer=""
        />
        <Question
          question="Can I customize the shortened URLs to reflext my brand or content?"
          answer=""
        />
        <Question
          question="Can I track the performance of my shortened URLs?"
          answer=""
        />
        <Question
          question="How secure is the URL shortening service? Are the shortened links protected?"
          answer=""
        />
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default FAQPage;

// // import React from "react";
// // import "./App.css";
// import { FaPlus } from "react-icons/fa6";

// const faqData = [
//   {
//     question: "How does URL shortning work?",
//     answer:
//       "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the \n original URL. When a user clicks on the shortened link, they are redirected to the intended destination. ",
//   },
//   {
//     question:
//       "Is it necessary to create an account to use the URL shortening service?",
//     answer: "",
//   },
//   {
//     question: "Are the shortened links permanent? will they expire?",
//     answer: "",
//   },
//   {
//     question: "Are there any limitations on the number of URL I cn shorten?",
//     answer: "",
//   },
//   {
//     question:
//       "Can I customize the shortened URLs to reflext my brand or content?",
//     answer: "",
//   },
//   {
//     question: "Can I track the performance of my shortened URLs?",
//     answer: "",
//   },
//   {
//     question:
//       "How secure is the URL shortening service? Are the shortened links protected \n against spam or malicious activity?",
//     answer: "",
//   },
// ];

// const FAQPage = () => {
//   return (
//     <div className=" bg-slate-200 container pt-20 mx-auto p-8">
//       <h1 className="flex justify-center text-4xl font-bold mb-8">FAQs</h1>
//       <div className="space-y-1  pb-20 ">
//         {faqData.map((item, index) => (
//           <div key={index} className="flex justify-center border-b pb-4">
//             <div className="flex items-center justify-between w-[100%] md:text-lg md:w-[50%] p-3 bg-slate-300 rounded">
//               <div className="font-normal ">{item.question}</div>
//               <button className=" focus:outline-none">
//                 <FaPlus />
//                 {/* <hr /> */}
//               </button>
//             </div>
//             <div className="hidden mt-2 text-xs">{item.answer}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQPage;
