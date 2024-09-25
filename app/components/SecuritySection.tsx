import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import BuildIcon from "@mui/icons-material/Build";
import LockIcon from "@mui/icons-material/Lock"; // Example icons
import ShieldIcon from "@mui/icons-material/Shield"; // Example icons
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner"; // Example icons
import SecurityIcon from "@mui/icons-material/Security"; // Example icons
import CCPA from "@/app/assets/Images/ccpa.png";
import GDPR from "@/app/assets/Images/gdpr.png";
import HIPAA from "@/app/assets/Images/hipaa.png";
import AICPA from "@/app/assets/Images/aicpa.png";
import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
// Define your card data with MUI icons directly
const cardsData = [
  {
    title: "Risk Profile",
    icon: <FaShieldAlt className="h-6 w-6 mr-2" />, // Added margin-right
    content: [
      { label: "Data Access Level", value: "Restricted" },
      { label: "Impact Level", value: "Substantial" },
      { label: "Recovery Time Objective", value: "24-48 hours" },
    ],
    footer: "View more",
  },
  {
    title: "Reports",
    icon: <SavedSearchIcon className="h-6 w-6 mr-2" />, // Added margin-right
    content: ["Network Diagram", "Pentest Report", "Security Prospectus"],
    footer: "View more",
  },
  {
    title: "Product Security",
    icon: <PiFilesFill className="h-6 w-6 mr-2" />, // Added margin-right
    content: ["Audit Logging", "Integrations", "Product Architecture"],
    footer: "View more",
  },
  {
    title: "Infrastructure",
    icon: <FaTools className="h-6 w-6 mr-2" />, // Added margin-right
    content: ["Status Monitoring", "Amazon Web Services", "Anti-DDoS"],
    footer: "View more",
  },
  {
    title: "Data Security",
    icon: <FaDatabase className="h-6 w-6 mr-2" />, // Example icon with margin-right
    content: ["Data Backups", "Encryption-at-rest", "Encryption-in-transit"],
    footer: "View more",
  },
  {
    title: "Access Control",
    icon: <ShieldIcon className="h-6 w-6 mr-2" />, // Example icon with margin-right
    content: ["Data Access", "Logging", "Password Security"],
    footer: "View more",
  },
  {
    title: "Legal",
    icon: <FaGavel className="h-6 w-6 mr-2" />, // Example icon with margin-right
    content: [
      "Subprocessors",
      "Data Processing Agreement",
      "Master Services Agreement",
    ],
    footer: "View more",
  },
  {
    title: "Corporate Security",
    icon: <FaBuildingShield className="h-6 w-6 mr-2" />, // Example icon with margin-right
    content: ["Employee Training", "Incident Response", "Internal SSO"],
    footer: "View more",
  },
];

const SecuritySection = () => {
  return (
    <div
      className="px-4"
      style={{
        margin: "40px 0px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Security</h2>
        <p className="mt-4 text-lg text-gray-600 ">
          Our commitment to data privacy and security is embedded in every part
          of our business.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full"
            style={{
              border: "1px solid #f7f4f4",
            }}
          >
            <div className="flex items-center mb-4">
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-800 ">
                {card.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {card.content.map((item, i) =>
                typeof item === "object" ? (
                  <li key={i}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ) : (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon
                      sx={{ fill: "#4ba654" }} // Transparent green shade
                      className="text-white rounded-full mr-2" // Ensure the icon background or container is styled
                      style={{ fontSize: 18 }}
                    >
                      {/* Using SVG to ensure tick is white */}
                      <path
                        d="M10 15l-5-5 1.41-1.41L10 12.17l8.59-8.59L20 5l-10 10z"
                        fill="white"
                      />
                    </CheckCircleIcon>
                    {item}
                  </li>
                )
              )}
            </ul>
            <a href="#" className="block mt-6 font-medium transition-colors">
              {card.footer} &rarr;
            </a>
          </div>
        ))}
      </div>

      {/* Compliance Section */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Compliance</h3>
        <div className="flex justify-center space-x-4">
          <Image
            src={CCPA}
            alt="Image 3"
            width={50}
            height={50}
            className="h-12"
          />
          <Image
            src={GDPR}
            alt="Image 2"
            width={40}
            height={50}
            className="h-12"
          />
          <Image
            src={HIPAA}
            alt="Image 4"
            width={75}
            height={50}
            className="h-12"
          />
          <Image
            src={AICPA}
            alt="Image 5"
            width={50}
            height={50}
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
