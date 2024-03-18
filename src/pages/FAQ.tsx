// import React from "react";
import Question from "../components/Question";

const FAQPage = () => {
  return (
    <div className="bg-slate-200">
      <div className="max-w-2xl mx-auto mt-8 px-4 ">
        <h1 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <Question
          question="What is Tailwind CSS?"
          answer="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without having to leave your HTML."
        />
        <Question
          question="How do I install Tailwind CSS?"
          answer="You can install Tailwind CSS via npm or yarn by running npm install tailwindcss or yarn add tailwindcss."
        />
        {/* Add more questions here */}
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
