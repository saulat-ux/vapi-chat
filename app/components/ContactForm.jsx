import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 bg-white"
      style={{
        margin: "40px 0px",
      }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center">
        Get in Touch with Us
      </h2>
      <p className="mb-8 text-center text-lg sm:text-xl lg:text-base max-w-xl text-gray-800">
        Have questions about our services? Need more information or want to
        <br />
        discuss your specific needs? Fill out the form below, and our team will
        get <br /> back to you as soon as possible. We’re here to help!
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Full Name"
          className="col-span-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="col-span-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="col-span-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="col-span-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
        />
        <textarea
          rows="10"
          placeholder="Write your inquiries here"
          className="max-h-[210px]  col-span-1 md:col-span-2 p-3 border border-gray-300 rounded-3xl radius-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
          style={{ resize: "none" }}
        ></textarea>

        {/* Button with reduced width */}
      </form>
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          style={{
            background: "#08ba08",
            fontSize: "12px",
            fontWeight: "600",
          }}
          className="p-3 text-white rounded-full transition-all duration-300 w-[250px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
