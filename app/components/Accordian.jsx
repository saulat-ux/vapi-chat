"use client";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "39px", // Only one place to apply the border radius
        overflow: "hidden",
        transition: "max-height 0.5s linear",
      }}
    >
      <div className="text-gray-800">
        <button
          className="w-full flex justify-between items-center text-lg font-medium focus:outline-none p-4 px-8"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "22px",
            borderBottom: "1px solid black",
            borderRadius: "2rem",
            textAlign: "left",
          }}
        >
          {question}
          <span>{isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
        </button>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0px", // Expanding and collapsing logic
          overflow: "hidden",
          transition: "max-height 0.5s linear", // Smooth transition
        }}
        className="px-8"
      >
        <p
          style={{
            padding: "12px",
          }}
          className="text-black"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;
