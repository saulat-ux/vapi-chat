import { useEffect } from "react";

// Define the custom hook
const useCustomHook = () => {
  useEffect(() => {
    var buttonContainer = document.getElementsByClassName("vapi-btn");
    let buttAry = Array.from(buttonContainer) as HTMLElement[]; // Ensure it's an array of HTML elements

    // Ensure buttAry has elements
    console.log("buttAry---", buttAry);

    if (buttAry.length > 0) {
      // Check if running in a browser environment
      if (typeof window !== "undefined") {
        let currentUrl = window.location.href;
        console.log("currentUrl---", currentUrl);
        // Compare the current URL with localhost (ignoring query parameters, etc.)
        if (currentUrl !== "http://localhost:3000") {
          buttAry.forEach((item) => {
            console.log("items are ---", item);
            item.style.display = "none"; // Hide elements
          });
        }
      }
    }
  }, []); // Empty dependency array to run once

  // No need to return anything if it's just an effect
};

export default useCustomHook;
