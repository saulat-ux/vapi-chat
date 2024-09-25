"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useCustomHook from "../CustomHooks/useCustomHook";
import basicPlan from "@/app/assets/Images/basic plan.png";
import proplan from "@/app/assets/Images/pro plan.png";
import enterprice from "@/app/assets/Images/enterprice.png";
import { FaCircleCheck } from "react-icons/fa6";
import AccordianComp from "../components/Accordians/Pricing";

const PricingSection = () => {
  useCustomHook();
  const [isAnnual, setIsAnnual] = useState(false);
  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  let pricingData: any = [
    {
      planName: "Basic",
      price: `${isAnnual == true ? "$79/monthly" : "$99/monthly"}`,
      services: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "Normal support",
        "Up to 3 team members",
      ],
    },
    {
      planName: "Pro",
      price: `${isAnnual == true ? "$159/monthly" : "$199/monthly"}`,
      services: [
        "All analytics features",
        "Up to 1,000,000 tracked visits",
        " Premium support",
        "Up to 10 team members",
      ],
    },
    {
      planName: "Premium",
      price: `${isAnnual == true ? "$319 /monthly" : "$399 /monthly"}`,
      services: [
        " All analytics features",
        "Up to 250,000 tracked visits",
        " Normal support",
        "Up to 3 team members",
      ],
    },
    {
      planName: "Enterprise",
      price: null,
      services: [
        "All analytics features",
        "Up to 5,000,000 tracked visits",
        "Dedicated support",
        "Up to 50 team members",
      ],
    },
  ];

  return (
    <section
      className="bg-white"
      style={{
        margin: "40px 0px",
      }}
    >
      {/* Pricing Header */}
      <div className=" flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl sm:text-3xl lg:text-3xl font-semibold   text-gray-800">
          Pricing
        </h2>
        <p className="mt-4 text-gray-800 text-lg sm:text-xl lg:text-base max-w-xl ">
          A full service, 24/7 receptionist at incredibly affordable simple
          pricing. Many small businesses recover the cost of their AI by
          scheduling just one appointment.
        </p>
      </div>

      {/* Toggle between Monthly and Annually */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex rounded-full p-1 bg-gray-200 ">
          <button
            className={`px-8 py-6 text-sm text-gray-800 rounded-full ${
              !isAnnual ? "bg-white" : ""
            }`}
            onClick={() => setIsAnnual(false)}
            style={{
              fontSize: "24px",
              fontWeight: "300",
            }}
          >
            <span>Monthly</span>
          </button>
          <button
            className={`px-8 py-6 text-sm text-gray-800 rounded-full flex flex-col ${
              isAnnual ? "bg-white" : ""
            }`}
            onClick={() => setIsAnnual(true)}
            style={{
              fontSize: "24px",
              fontWeight: "300",
            }}
          >
            <span>Annually</span>
          </button>
        </div>
      </div>

      <div
        style={{
          display: "block",
          color: "#8C8C8C",
          margin: "auto",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        *prices based on USD
      </div>

      <div className="block lg:hidden px-4">
        {pricingData.map((item: any, index: any) => {
          return (
            <div className="mt-5">
              <AccordianComp data={item} />
            </div>
          );
        })}
      </div>

      {/* Pricing Cards */}
      <div
        className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        style={{
          marginTop: "60px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Basic Plan */}
        <div
          className="bg-white shadow-lg px-8 py-12 text-center"
          style={{
            border: "1px solid #f4f4f4",
            height: "570px",
            borderRadius: "20px",
          }}
        >
          <div className="flex items-center justify-start">
            {/* For individuals */}
            <Image src={basicPlan} alt="Image 3" width={190} height={200} />
          </div>

          <p className="text-gray-500 mt-3 mb-3 text-left">
            Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing
            elit.
          </p>

          <div
            className="text-5xl font-bold  text-gray-800 text-left"
            style={{ color: "#170F49" }}
          >
            ${isAnnual ? "79" : "99"}
            <span className="text-xl font-normal text-gray-500"> /monthly</span>
          </div>

          <p
            className="mt-3 mb-3 font-bold text-left"
            style={{
              color: "#170F49",
            }}
          >
            What included
          </p>
          <ul className="text-gray-800">
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              All analytics features
            </li>
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Up to 250,000 tracked visits
            </li>
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Normal support
            </li>
            <li className="flex items-center justiyf-center">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Up to 3 team members
            </li>
          </ul>

          <button
            className="mt-6 text-white px-6 py-6 rounded-full w-full"
            style={{ backgroundColor: "#229930" }}
          >
            Get started
          </button>
        </div>




        {/* Pro Plan */}
        <div
          className="shadow-lg px-8 py-12 text-center"
          style={{
            background: "#229930",
            height: "570px",
            marginTop: "-50px",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <button
            style={{
              color: "white",
              backgroundColor: "#4ead59",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: "400",
              borderRadius: "5px",
              position: "absolute",
              top: "30px",
              right: "30px",
            }}
          >
            Popular
          </button>
          <div className="flex items-center justify-start">
            {/* For individuals */}
            <Image src={proplan} alt="Image 3" width={190} height={200} />
          </div>

          <p className="text-white mt-3 mb-3 text-left">
            Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing
            elit.
          </p>

          <div
            className="text-5xl font-bold  text-gray-800 text-left"
            style={{ color: "white" }}
          >
            ${isAnnual ? "159" : "199"}
            <span className="text-xl font-normal"> /monthly</span>
          </div>
          <p
            className="mt-3 mb-3 font-bold text-left"
            style={{
              color: "white",
            }}
          >
            What included
          </p>
          <ul className="text-gray-800">
            <li className="flex items-center justiyf-center mb-4 text-white">
              <FaCircleCheck
                size={22}
                style={{ color: "white" }}
                className="mr-3"
              />{" "}
              All analytics features
            </li>
            <li className="flex items-center justiyf-center mb-4 text-white">
              <FaCircleCheck
                size={22}
                style={{ color: "white" }}
                className="mr-3"
              />{" "}
              Up to 1,000,000 tracked visits
            </li>
            <li className="flex items-center justiyf-center mb-4 text-white">
              <FaCircleCheck
                size={22}
                style={{ color: "white" }}
                className="mr-3"
              />{" "}
              Premium support
            </li>
            <li className="flex items-center justiyf-center text-white">
              <FaCircleCheck
                size={22}
                style={{ color: "white" }}
                className="mr-3"
              />{" "}
              Up to 10 team members
            </li>
          </ul>

          <button
            className="mt-6 text-white px-6 py-6 rounded-full w-full"
            style={{ backgroundColor: "white", color: "#229930" }}
          >
            Get started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div
          className="bg-white  shadow-lg px-8 py-12 text-center"
          style={{
            border: "1px solid #f4f4f4",
            height: "570px",
            borderRadius: "20px",
          }}
        >
          <div className="flex items-center justify-start">
            {/* For individuals */}
            <Image src={enterprice} alt="Image 3" width={190} height={200} />
          </div>

          <p className="text-gray-500 mt-3 mb-3 text-left">
            Lorem ipsum dolor sit amet doloroli sitol conse ctetur adipiscing
            elit.
          </p>

          <div
            className="text-5xl font-bold  text-gray-800 text-left"
            style={{ color: "#170F49" }}
          >
            ${isAnnual ? "319" : "399"}
            <span className="text-xl font-normal text-gray-500"> /monthly</span>
          </div>

          <p
            className="mt-3 mb-3 font-bold text-left"
            style={{
              color: "#170F49",
            }}
          >
            What included
          </p>
          <ul className="text-gray-800">
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              All analytics features
            </li>
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Up to 5,000,000 tracked visits
            </li>
            <li className="flex items-center justiyf-center mb-4">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Dedicated support
            </li>
            <li className="flex items-center justiyf-center">
              <FaCircleCheck
                size={22}
                style={{ color: "#229930" }}
                className="mr-3"
              />{" "}
              Up to 50 team members
            </li>
          </ul>

          <button
            className="mt-6 text-white px-6 py-6 rounded-full w-full"
            style={{ backgroundColor: "#229930" }}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
