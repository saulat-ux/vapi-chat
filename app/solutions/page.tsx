"use client";
import { useState } from "react";
import useCustomHook from "../CustomHooks/useCustomHook";
import SolutionResponsive from "../components/responsive/Solution/SolutionResponsive";
export default function Solutions() {
  useCustomHook();
  const [activeTab, setActiveTab] = useState("inbound");
  const [isInBound, setisInBound] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center bg-white text-center px-4"
      style={{
        margin: "40px 0px",
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold mb-4 text-gray-800">
        Solutions
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-lg sm:text-xl lg:text-xl max-w-3xl mb-8">
        Elevate customer interactions with our AI-powered brain, seamlessly
        handling inbound and outbound calls. From checking availability and
        making bookings to answering inquiries and FAQs, our smart AI ensures a
        smooth customer experience, 24/7.
      </p>
      <div className="flex justify-center  mb-4">
        <div className="inline-flex rounded-full p-1 bg-gray-200">
          <button
            className={`px-6 py-6 text-[16px] sm:text-[18px] text-gray-800 rounded-full ${
              !isInBound ? "bg-white" : ""
            }`}
            onClick={() => setisInBound(false)}
          >
            Inbound calls
          </button>
          <button
            className={`px-6 py-2 text-[16px] sm:text-[18px] text-gray-800 rounded-full ${
              isInBound ? "bg-white" : ""
            }`}
            onClick={() => setisInBound(true)}
          >
            Outbound calls
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      {isInBound == false ? (
        <>
          <div className="hidden md:block mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl ">
              {/* Business Card Examples */}
              <div
                className="bg-white  rounded-3xl "
                style={{ overflow: "hidden", width: "315px" }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Barbershop
                </div>
                <div
                  className="text-left"
                  style={{
                    background: "#F5F5F5",
                    overflow: "hidden",
                    padding: "18px 24px 18px 24px",
                  }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Availability</li>
                    <li>Bookings</li>
                    <li>Inquiries</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white  rounded-3xl "
                style={{ overflow: "hidden", width: "315px" }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Clinic Office
                </div>
                <div
                  className="text-left"
                  style={{
                    background: "#F5F5F5",
                    overflow: "hidden",
                    padding: "18px 24px 18px 24px",
                  }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Schedule</li>
                    <li>Appointments</li>
                    <li>Patient FAQs</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white  rounded-3xl "
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Restaurant
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Reservations</li>
                    <li>Menu inquiries</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white -200 rounded-3xl "
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  SaaS Website
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Support</li>
                    <li>Product information</li>
                    <li>Troubleshooting</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white rounded-3xl"
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Insurance Companies
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Claims</li>
                    <li>Policy help</li>
                    <li>Support</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white rounded-3xl"
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Realtor Office
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Property inquiries</li>
                    <li>Viewings</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl ">
              {/* Business Card Examples */}
              <div
                className="bg-white  rounded-3xl "
                style={{ overflow: "hidden", width: "315px" }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Retail Store
                </div>
                <div
                  className="text-left"
                  style={{
                    background: "#F5F5F5",
                    overflow: "hidden",
                    padding: "18px 24px 18px 24px",
                  }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Sales new product</li>
                    <li>Customer follow-up</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white  rounded-3xl "
                style={{ overflow: "hidden", width: "315px" }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Financial Services
                </div>
                <div
                  className="text-left"
                  style={{
                    background: "#F5F5F5",
                    overflow: "hidden",
                    padding: "18px 24px 18px 24px",
                  }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Lead generation </li>
                    <li>Loan offers</li>
                    <li>Appointment setting</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white  rounded-3xl "
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Market Research
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Data collection</li>
                    <li>Surveys</li>
                    <li>Customer insights</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white -200 rounded-3xl "
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Non-Profit Organization
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Fundraising</li>
                    <li>Event invitations</li>
                    <li>Volunteer recruitment</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white rounded-3xl"
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Healthcare Provider
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Appointment reminders</li>
                    <li>Patient follow-up</li>
                    <li>Wellness checks</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>

              <div
                className="bg-white rounded-3xl"
                style={{
                  overflow: "hidden",
                  width: "315px",
                  background: "#F5F5F5",
                }}
              >
                <div
                  className="bg-green-600 text-white p-4 rounded-t-3xl"
                  style={{ fontSize: "26px" }}
                >
                  Debt Collection
                </div>
                <div
                  className="text-left"
                  style={{ overflow: "hidden", padding: "18px 24px 18px 24px" }}
                >
                  <ul className="text-black" style={{ fontSize: "24px" }}>
                    <li>Negotiate</li>
                    <li>repayments</li>
                    <li>and more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* the responsive elements */}
      <SolutionResponsive isInBound={isInBound} />
    </div>
  );
}
