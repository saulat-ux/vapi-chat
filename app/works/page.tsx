"use client";
import useCustomHook from "../CustomHooks/useCustomHook";
import MobileComponent from "../components/responsive/HowItWork/Component";
export default function HowItWorks() {
  useCustomHook();
  return (
    <div
      className="flex flex-col items-center justify-center bg-white text-center"
      style={{
        margin: "40px 0px",
      }}
    >
      {/* Heading */}
      <h1
        className="text-3xl sm:text-3xl lg:text-3xl font-bold mb-4"
        style={{
          color: "#020202",
        }}
      >
        Here's how it works
      </h1>

      {/* Subheading */}
      <p
        className="text-lg sm:text-xl lg:text-xl max-w-3xl mb-12"
        style={{
          color: "#020202",
        }}
      >
        Made easy with 4 simple steps for seamless integration.
      </p>

      {/* Steps Grid */}
      {/* mobile */}
      <div className="px-5 lg:hidden">
        <MobileComponent />
      </div>

      {/* responsive */}
      <div className="hidden lg:block">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl px-10"
          style={{
            marginTop: "50px",
          }}
        >
          {/* Step 1 */}
          <div className="bg-white border-4 border-black  rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-4 rounded-t-2xl text-2xl font-medium">
              Step 1
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Business Information
              </h3>
              <p className="text-gray-600">
                Share your website URL so our AI can quickly gather essential
                information about your business.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-4 border-black rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-4 rounded-t-2xl text-2xl font-medium">
              Step 2
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Voice & Language Selection
              </h3>
              <p className="text-gray-600">
                Choose the perfect voice and language for your AI receptionist
                to create a personalized experience.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-4 border-black rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-4 rounded-t-2xl text-2xl font-medium">
              Step 3
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Training & Guardrails
              </h3>
              <p className="text-gray-600">
                Guide our AI through typical customer interactions, setting
                clear boundaries to ensure accurate responses.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white border-4 border-black rounded-3xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-4 rounded-t-2xl text-2xl font-medium">
              Step 4
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Tool Integration
              </h3>
              <p className="text-gray-600">
                Connect the AI with your existing tools to enable seamless call
                transfers, booking, text messaging, CRM updates, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
