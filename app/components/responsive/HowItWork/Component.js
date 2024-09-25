const Component = () => {
  return (
    <>
      <div
        className="flex items-center p-1"
        style={{
          borderRadius: "50px",
          border: "1px solid black",
          width: "100%",
        }}
      >
        <div
          className="flex items-center justify-center mr-2 text-black"
          style={{
            background: "#D9D9D9",
            borderRadius: "50%",
            fontSize: "24px", // Reduced font size for mobile
            fontWeight: "600",
            width: "72px", // Adjusted width for smaller screens
            height: "72px", // Adjusted height for smaller screens
            padding: "6px",
          }}
        >
          1
        </div>

        <div className="flex flex-col w-[250px]">
          <p
            className="font-medium text-left text-lg md:text-xl text-black" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
            }}
          >
            Business Information
          </p>
          <p
            className="text-left text-gray-700 text-sm md:text-base" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "13px",
              lineHeight: "15px",
            }}
          >
            Share your website URL so our AI can quickly gather essential
            information about your business.
          </p>
        </div>
      </div>

      <div
        className="flex items-center p-1 mt-8"
        style={{
          borderRadius: "50px",
          border: "1px solid black",
          width: "100%",
        }}
      >
        <div
          className="flex items-center justify-center mr-2 text-black"
          style={{
            background: "#D9D9D9",
            borderRadius: "50%",
            fontSize: "24px", // Reduced font size for mobile
            fontWeight: "600",
            width: "72px", // Adjusted width for smaller screens
            height: "72px", // Adjusted height for smaller screens
            padding: "6px",
          }}
        >
          2
        </div>

        <div className="flex flex-col w-[250px]">
          <p
            className="font-medium text-left text-lg md:text-xl text-black" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
            }}
          >
            Voice & Language Selection
          </p>
          <p
            className="text-left text-gray-700 text-sm md:text-base" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "13px",
              lineHeight: "15px",
            }}
          >
            Choose the perfect voice and language for your AI receptionist to
            create a personalized experience.
          </p>
        </div>
      </div>
      <div
        className="flex items-center p-1 mt-8"
        style={{
          borderRadius: "50px",
          border: "1px solid black",
          width: "100%",
        }}
      >
        <div
          className="flex items-center justify-center mr-2 text-black"
          style={{
            background: "#D9D9D9",
            borderRadius: "50%",
            fontSize: "24px", // Reduced font size for mobile
            fontWeight: "600",
            width: "72px", // Adjusted width for smaller screens
            height: "72px", // Adjusted height for smaller screens
            padding: "6px",
          }}
        >
          3
        </div>

        <div className="flex flex-col w-[250px]">
          <p
            className="font-medium text-left text-lg md:text-xl text-black" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
            }}
          >
            Training & Guardrails
          </p>
          <p
            className="text-left text-gray-700 text-sm md:text-base" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "13px",
              lineHeight: "15px",
            }}
          >
            Guide our AI through typical customer interactions, setting clear
            boundaries to ensure accurate responses.
          </p>
        </div>
      </div>

      <div
        className="flex items-center p-1 mt-8"
        style={{
          borderRadius: "50px",
          border: "1px solid black",
          width: "100%",
        }}
      >
        <div
          className="flex items-center justify-center mr-2 text-black"
          style={{
            background: "#D9D9D9",
            borderRadius: "50%",
            fontSize: "24px", // Reduced font size for mobile
            fontWeight: "600",
            width: "72px", // Adjusted width for smaller screens
            height: "72px", // Adjusted height for smaller screens
            padding: "6px",
          }}
        >
          4
        </div>

        <div className="flex flex-col w-[250px]">
          <p
            className="font-medium text-left text-lg md:text-xl text-black" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
            }}
          >
            Tool Integration
          </p>
          <p
            className="text-left text-gray-700 text-sm md:text-base" // Adjust text size for mobile
            style={{
              margin: "0px",
              padding: "0px",
              fontSize: "13px",
              lineHeight: "15px",
            }}
          >
            Guide our AI through typical customer interactions, setting clear
            boundaries to ensure accurate responses.
          </p>
        </div>
      </div>
    </>
  );
};

export default Component;
