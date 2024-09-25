"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import useCustomHook from "./CustomHooks/useCustomHook";
import CircularProgress from "@mui/material/CircularProgress";
import { IoMicOutline } from "react-icons/io5";
import { formatPhoneNumber } from "../lib/helper";
import AbstractBall from "./components/Blob";
import useVapi from "./hooks/use-vapi";
import { Button } from "@mui/material";
import { MicIcon, PhoneOff } from "lucide-react";

export default function Home() {
  const elevenlabsApiKey =
    "sk_856985a302221283a7a591b60f8202e66d8e50b152115442"; // API Key for ElevenLabs
  const vapiApiKeyPrivate = "51c00d85-2e56-4fe3-b5bb-a5173c7298a3"; // API Key for VAPI

  const [vapiInstance, setVapiInstance] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // Track recording status
  const [mediaRecorder, setMediaRecorder] = useState(null); // MediaRecorder instance
  const [audioChunks, setAudioChunks] = useState([]); // To store audio data chunks
  const [audioURL, setAudioURL] = useState(""); // To store the audio file URL
  const [stream, setStream] = useState(null); // Store the audio stream
  const [customerNumber, setCustomerNumber] = useState(""); // Store the customer number
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // the code for the vapi blocks code
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const [config, setConfig] = useState({
    perlinTime: 50.0,
    perlinDNoise: 2.5,
    chromaRGBr: 7.5,
    chromaRGBg: 5,
    chromaRGBb: 7,
    chromaRGBn: 0,
    chromaRGBm: 1.0,
    sphereWireframe: false,
    spherePoints: false,
    spherePsize: 1.0,
    cameraSpeedY: 0.0,
    cameraSpeedX: 0.0,
    cameraZoom: 175,
    cameraGuide: false,
    perlinMorph: 5.0,
  });

  useEffect(() => {
    if (isSessionActive && volumeLevel > 0) {
      setConfig((prevConfig) => ({
        ...prevConfig,
        perlinTime: 100.0,
        perlinMorph: 25.0,
      }));
    } else {
      if (isSessionActive) {
        setConfig((prevConfig) => ({
          ...prevConfig,
          perlinTime: 25.0,
          perlinMorph: 10.0,
        }));
      } else {
        setConfig((prevConfig) => ({
          ...prevConfig,
          perlinTime: 5.0,
          perlinMorph: 2.0,
        }));
      }
    }
  }, [isSessionActive, volumeLevel]);

  // const location = window.location.pathname;

  // const buttonConfig = {
  //   width: "200px", // Button width
  //   height: "200px", // Button height
  //   idle: {
  //     color: `transparent`, // No background color
  //     icon: `/Images/MIC.jpg`, // Mic icon
  //     iconStyle: {
  //       width: "200%", // Ensure the icon fits the button's width
  //       height: "auto", // Maintain the aspect ratio
  //       display: "block",
  //       margin: "0 auto", // Center the icon horizontally
  //     },
  //   },
  //   loading: {
  //     type: "round",
  //     title: "Connecting...",
  //     icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`, // Loader icon
  //   },
  //   active: {
  //     color: `rgb(255, 0, 0)`, // Red color during the active state
  //     type: "round",
  //     title: "Call is in progress...",
  //     icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`, // Phone off icon
  //   },
  // };

  // VAPI SDK Initialization
  // useEffect(() => {
  //   (function (d, t) {
  //     const g = document.createElement(t),
  //       s = d.getElementsByTagName(t)[0];
  //     g.src =
  //       "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  //     g.defer = true;
  //     g.async = true;
  //     s.parentNode.insertBefore(g, s);

  //     g.onload = function () {
  //       const vapi = window.vapiSDK.run({
  //         apiKey: VapiApiKeyPublic, // mandatory
  //         assistant: assistant, // mandatory
  //         config: buttonConfig,
  //       });
  //       setVapiInstance(vapi);
  //     };
  //   })(document, "script");
  // }, []);

  // useEffect(() => {
  //   const getItem = document.getElementsByClassName("vapi-btn");
  //   let bowlArray = Array.from(getItem); // Ensure it's an array of HTML elements
  //   console.log("getItem---", bowlArray[0]);

  //   if (bowlArray.length > 0) {
  //     const vipbutton = document.getElementById("vipbutton");
  //     console.log("vipbutton---", vipbutton);
  //     // Clear vipbutton content before appending
  //     vipbutton.innerHTML = "";
  //     bowlArray[0].classList.add("bestButton");
  //     vipbutton.appendChild(bowlArray[0]);
  //   }
  //   // get updated buttons
  //   let allButtons = document.getElementsByClassName("vapi-btn");
  //   allButtons = Array.from(allButtons);

  //   allButtons.forEach((item) => {
  //     if (!item.classList.contains("bestButton")) {
  //       item.remove();
  //     }
  //   });
  // }, [vapiInstance]);

  useCustomHook();
  // console.log("vapiInstance--", vapiInstance);

  // Start recording function
  const startRecording = async () => {
    try {
      console.log("Starting recording...");

      // Request audio permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(stream); // Store the stream for later use

      // Create the MediaRecorder instance
      const recorder = new MediaRecorder(stream);

      // Reset audio chunks before starting recording
      setAudioChunks([]);

      // Event handler for when data becomes available
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          console.log("Data available:", e.data);
          setAudioChunks((prev) => [...prev, e.data]); // Collect audio chunks
        } else {
          console.log("Empty data chunk received");
        }
      };

      recorder.onerror = (err) => {
        console.error("Recording error:", err);
      };

      recorder.start(1000); // Start recording and request data every 1 second
      setMediaRecorder(recorder); // Save the mediaRecorder instance
      setIsRecording(true); // Change the state to show the "Stop" button
      console.log("Recording started...");
    } catch (err) {
      console.error("Error accessing microphone:", err);
      Swal.fire({
        icon: "error",
        title: "Microphone Access Error",
        text: "Error accessing microphone. Please check permissions.",
      });
    }
  };

  // Send WebM file using POST and FormData
  const sendWebMToAPI = (webmBlob) => {
    const formData = new FormData();
    formData.append("elevenlabs_api_key", elevenlabsApiKey);
    formData.append("file", webmBlob, "recording.webm"); // Append the WebM blob with a filename

    // Build URL for the API endpoint
    const url = new URL("https://13.49.222.134/api/clone");

    // Send POST request with FormData (including the file)
    fetch(url, {
      method: "POST",
      body: formData, // Use formData to send the file
    })
      .then(async (response) => {
        if (response.ok) {
          const jsonResponse = await response.json(); // Parse the JSON response
          console.log("WebM file sent successfully.");
          console.log("Response data:", jsonResponse); // Log the response data

          // Store the response in session storage
          sessionStorage.setItem("voiceId", jsonResponse.voice_id);
          console.log("Stored in session:", jsonResponse.voice_id);
          Swal.fire({
            icon: "success",
            title: "Audio Processed",
            text: "Audio file processed and stored successfully.",
          });
        } else {
          console.error("Error sending WebM file.");
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to send the WebM file.",
          });
        }
      })
      .catch((error) => {
        console.error("Error during POST request:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while sending the request.",
        });
      });
  };

  // Trigger the call API when the user presses the "CALL ME" button
  const handleCallAPI = async () => {
    setIsLoading(true);
    // Retrieve the voice_id from session storage
    // const voiceId = sessionStorage.getItem("voiceId");
    let voiceId = sessionStorage.getItem("voiceId");
    if (!voiceId) {
      voiceId = "sarah";
    }

    console.log("Retrieved voice ID from session:", voiceId);
    console.log("Customer number entered:", customerNumber);

    if (!voiceId) {
      Swal.fire({
        icon: "warning",
        title: "No Voice ID",
        text: "No voice ID found in session storage. Please record audio first.",
      });
      setIsLoading(false);
      return;
    }

    if (!customerNumber) {
      Swal.fire({
        icon: "warning",
        title: "Missing Customer Number",
        text: "Please enter a customer number.",
      });
      setIsLoading(false);
      return;
    }

    let theNumber = await formatPhoneNumber(customerNumber);
    if (theNumber === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Number",
        text: "Please enter a valid number.",
      });
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("vapi_api_key", vapiApiKeyPrivate);
    formData.append("voice_id", voiceId);
    formData.append("customer_number", theNumber);

    // Build URL for the API endpoint
    const url = new URL("https://13.49.222.134/api/call");

    console.log("Sending data to call API:", {
      vapi_api_key: vapiApiKeyPrivate,
      voice_id: voiceId,
      customer_number: theNumber,
    });

    // Send POST request with FormData
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        setIsLoading(false);
        if (response.ok) {
          const jsonResponse = await response.json(); // Parse the JSON response
          console.log("Call initiated successfully.");
          console.log("Response data:", jsonResponse);
          Swal.fire({
            icon: "success",
            title: "Call Initiated",
            text: "Call has been successfully initiated.",
          });
        } else {
          console.error("Error initiating call.");
          Swal.fire({
            icon: "error",
            title: "Call Failed",
            text: "Failed to initiate the call.",
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error during POST request:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while initiating the call.",
        });
      });
  };

  // Stop recording function
  const stopRecording = () => {
    console.log("Stopping recording...");
    mediaRecorder.stop();

    // Stop the stream tracks (microphone)
    stream.getTracks().forEach((track) => track.stop());

    mediaRecorder.onstop = () => {
      console.log("Recording stopped, processing...");

      if (audioChunks.length === 0) {
        console.error("No audio chunks available.");
        Swal.fire({
          icon: "error",
          title: "No Audio",
          text: "No audio was captured. Please try recording again.",
        });
        return;
      }

      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      console.log("WebM Blob created:", audioBlob);
      sendWebMToAPI(audioBlob); // Send the WebM blob directly via POST request
      setAudioURL(URL.createObjectURL(audioBlob)); // Set the WebM URL for playback
      setIsRecording(false); // Reset recording state
    };
  };

  return (
    <div className="flex items-center justify-center h-[100%]">
      <div
        className="flex flex-col items-center justify-center bg-white text-center px-4"
        style={{
          margin: "40px 0px",
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            maxWidth: "400px",
          }}
        >
          <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl text-gray-800">
            AI Receptionist for businesses
          </h1>
        </div>
        {/* Subheading */}
        <div className="px-2">
          <p className="text-gray-600 mt-5 text-lg sm:text-xl lg:text-base max-w-xl">
            Works 24/7, consistent performance, book appointments, upselling,
            call recording, data collection, big cost savings. Input your
            business info for personalized AI replies.
          </p>
        </div>

        {/* Wrapper for VAPI SDK Button */}
        {/* <div className="relative mt-20 flex justify-center items-center w-full">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "113px", // Set the same width and height as in buttonConfig
            height: "119px",
            position: "relative",
            marginTop: "75px",
            marginBottom: "-40px",
          }}
          id="vipbutton"
        ></div>
      </div> */}

        <div style={{ width: "100%", height: "100%" }}>
          {/* <ConfigSheet config={config} setConfig={setConfig} /> */}
          <div>
            <AbstractBall {...config} />
          </div>
          <div className="flex justify-center">
            <Button
              sx={{
                color: "black",
              }}
              onClick={toggleCall}
              className=""
            >
              {isSessionActive ? <PhoneOff size={34} /> : <MicIcon size={34} />}
            </Button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center ">
        <div className="text-4xl">
          <IoMicOutline />
        </div>
        Try it!
      </div> */}
        {/* Clone Your Voice Button */}
        <div
          className="mt-5 space-y-4"
          style={{
            maxWidth: "341px",
            minWidth: "auto",
          }}
        >
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="bg-white py-4 text-xl rounded-full font-medium hover:bg-gray-200 transition exoFonts w-full"
              style={{
                color: "#000000",
                fontSize: "24px",
                fontWeight: "500",
                border: "1px solid #000000",
              }}
            >
              Clone Your Voice
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white py-4 text-xl rounded-full font-medium hover:bg-red-600 transition  w-full"
            >
              Stop
            </button>
          )}

          {/* Display Recorded Audio */}
          {audioURL && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-800">
                Your Audio has been recorded!
              </h3>
              {/* <audio controls src={audioURL}></audio> */}
            </div>
          )}

          {/* Additional Input and Call Me Button */}
          <div
            className="flex items-center justify-center mt-4"
            style={{
              border: "1px solid #000000",
              borderRadius: "50px",
            }}
          >
            <input
              type="text"
              placeholder="Enter your number"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)} // Update the customer number
              className="text-center py-4 pl-2 rounded-l-full text-lg text-gray-800 w-full"
              style={{
                background: "none",
                outline: "none", // Remove default focus outline
              }}
            />
            <button
              onClick={handleCallAPI}
              className="flex items-center justify-center text-white py-4 px-7 text-lg  font-bold hover:bg-gray-700 transition flex items-center exoFonts"
              disabled={isLoading} // Disable the button during the loading state
              style={{
                borderRadius: "50px",
                backgroundColor: "#000000",
                fontSize: "24px",
                fontWeight: "200",
                padding: "14px 8px",
                marginRight: "3px",
                textAlign: "center",
                width: "190px",
              }}
            >
              {isLoading ? (
                <>
                  <div>
                    <CircularProgress color="inherit" size={24} />
                  </div>
                </>
              ) : (
                <> CALL ME</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
