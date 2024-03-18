// import React from "react";
// import { FaPlus } from "react-icons/fa6";
import Question from "../components/Question";

const FAQPage = () => {
  return (
    <div className=" bg-slate-200 pt-20 mx-auto p-8">
      <div className="  mx-auto mt-8 px-4 ">
        <h1 className="flex justify-center text-4xl font-bold mb-8">FAQs</h1>
        <Question
          question="How does URL shortning work?"
          answer="URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the  original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
        />

        <Question
          question="How do I change a long URL to a short URL?"
          answer="To shorten a URL, you'll need a service like RB.GY. First, copy the long URL you want to shorten. Then, access the URL shortener tool. Paste your long URL into the appropriate field, then click Shorten URL. RB.GY will instantly generate a shortened version of your original URL, which leads to the same page when clicked."
        />
        <Question question="" answer="" />
      </div>
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
