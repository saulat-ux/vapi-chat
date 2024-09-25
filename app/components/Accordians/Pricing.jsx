"use client";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaCircleCheck } from "react-icons/fa6";
const PricingAccordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* plan basic */}
      <div
        style={{
          border: "1px solid black",
          borderRadius: "39px",
          overflow: "hidden",
          transition: "max-height 0.5s linear",
        }}
      >
        <div
          className={`text-gray-800`}
          // style={{ background: "#F4F4F4" }}
        >
          <button
            className="w-full flex justify-between items-center text-lg font-medium focus:outline-none p-4 px-8"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              fontSize: "16px",
              borderBottom: "1px solid black",
              borderRadius: "2rem",
            }}
          >
            <span className="text-2xl">{data?.planName}</span>
            <div>
              <span className="mr-2 text-1xl">{data?.price}</span>
              <span>
                {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </span>
            </div>
          </button>
          {/* {isOpen && <p className="text-gray-700 p-4">{answer}</p>} */}
        </div>

        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0px", // Use a large enough maxHeight value for the expanded state
            overflow: "hidden",
            transition: "max-height 0.5s linear", // Apply the transition to max-height
          }}
          className="px-8"
        >
          <div
            style={{
              padding: "12px",
            }}
          >
            <ul className="text-gray-800">
              {data?.services?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justiyf-center mb-4"
                  >
                    <FaCircleCheck
                      size={22}
                      style={{ color: "#34c759" }}
                      className="mr-3"
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordian;
