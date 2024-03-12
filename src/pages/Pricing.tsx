// import React from 'react'

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Pricing() {
  return (
    <>
      <div className="bg-slate-200">
        <div className=" flex justify-center items-center ">
          <div className="">
            <h1 className="text-xl md:text-4xl font-semibold text-center">
              {" "}
              A <span className="text-blue-700"> price perfect </span> for your
              needs.
            </h1>
            <p className="mt-2 md:mt-3 text-xs md:text-sm text-center">
              {" "}
              From catering for your personal, business, event and social needs,
              you can be <br />
              rest assured we have you in mind in our pricing.
            </p>
          </div>
        </div>
        {/* BOX ONE */}

        <div className="flex-wrap md:flex justify-center mt-5 md:mt-14">
          <div className="rounded-lg md:rounded-s-lg pt-5 py-7 px-10 md:px-10 w-[75%] md:w-[22%] border border-blue-500">
            {" "}
            <p className="text-xl font-medium"> Basic </p>
            <h1 className="mt-5 md:mt-8 mb-3 font-bold text-2xl md:text-3xl">
              {" "}
              Free{" "}
            </h1>{" "}
            <p className="text-xl font-medium">Free plans for all users</p>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600 font-black" />
              </p>
              <p className="-mt-1"> Unlimited URL shortening</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> Basic Link Analytics</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> Customizable Short Links</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> Standard Support</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600 font-semibold" />
              </p>
              <p className="-mt-1"> Ad-Supported</p>
            </span>
          </div>

          {/* BOX-TWO */}
          <div className=" bg-gray-900 text-slate-200 rounded-lg pt-8 py-20 px-10  md:pt-20 md:py-36 md:px-14 w-[85%] md:w-[25%] border-2 ">
            {" "}
            <p className="text-xl font-semibold"> Professional </p>
            <h1 className="mt-5 md:mt-8 mb-3 font-bold text-2xl md:text-4xl">
              {" "}
              $15 <span className="font-normal">/</span> month{" "}
            </h1>{" "}
            <p className="text-xl font-medium">Ideal for business creators</p>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline />
              </p>
              <p className="-mt-1"> Enhanced Link Analytics</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline />
              </p>
              <p className="-mt-1"> Custom Branded Domains</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline />
              </p>
              <p className="-mt-1"> Advanced Link Customizable</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline />
              </p>
              <p className="-mt-1"> Priority Support</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline />
              </p>
              <p className="-mt-1"> Ad-free Experience</p>
            </span>
          </div>
          {/* BOX THREE */}

          <div className="rounded-lg md:rounded-s-lg pt-5 py-7 px-10 md:px-10 w-[75%] md:w-[22%] border border-blue-500">
            {" "}
            <p className="text-xl font- font-medium"> Teams </p>
            <h1 className="mt-5 md:mt-8 mb-3 font-bold text-2xl md:text-3xl">
              {" "}
              $25 <span className="font-normal"> /</span> month{" "}
            </h1>{" "}
            <p className="text-xl font-medium">Share with up to 10 users</p>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600 font-black" />
              </p>
              <p className="-mt-1"> Team Collaboration</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> User Roles and Permissions</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> Enhanced Security</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600" />
              </p>
              <p className="-mt-1"> Api Acess</p>
            </span>
            <span className="flex gap-2 mt-6 ">
              <p>
                {" "}
                <IoMdCheckmarkCircleOutline className="text-blue-600 font-semibold" />
              </p>
              <p className="-mt-1"> Dedicated Account Manager</p>
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center gap-5 mt-16">
          <button className="border border-blue-700 rounded-full text-blue-700 p-1 w-[55%] md:p-2 md:w-[12%]">
            {" "}
            Get Custom Pricing{" "}
          </button>
          <button className="rounded-full bg-blue-700 text-slate-200 p-1 w-[55%] md:p-2 md:w-[12%]">
            {" "}
            Select Pricing{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
