// components/Header.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../public/Images/Btainiatic hd.png";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import ClearIcon from "@mui/icons-material/Clear";
export default function Header() {
  const isTablet = useMediaQuery("(max-width:940px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const toggleMenu = () => {
    console.log("is tablet or not---", isTablet);
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      // className="bg-white w-full top-0 left-0 z-50"
      className="bg-white fullHeader"
      style={{ borderBottom: "1px solid #f8f7f7" }}
    >
      <nav className="md:pl-12 md:pr-12">
        <div
          className="flex justify-between items-center"
          style={{
            padding: "12px 0px",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Brainiatic Logo"
                width={335}
                height={91}
                className="logoPic"
              />
            </div>
          </Link>

          {/* Navigation Links for large screens */}

          {/* Hamburger menu for mobile screens */}
          {isTablet == true ? (
            <>
              <div>
                <button
                  onClick={toggleMenu}
                  ref={toggleButtonRef}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  type="button"
                  aria-label="Toggle navigation"
                >
                  {/* <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg> */}
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="md:flex space-x-8">
                <Link
                  href="/works"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  How it works
                </Link>
                <Link
                  href="/solutions"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  Solutions
                </Link>
                <Link
                  href="/pricing"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/security"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  Security
                </Link>
                <Link
                  href="/faq"
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                  }}
                >
                  FAQ
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="space-y-4 items-center flex flex-col responsiveMenu"
            ref={menuRef}
            style={{
              backgroundColor: "#08ba08",
              color: "white",
              zIndex: "11",
              height: "100vh",
            }}
          >
            {/* close button */}
            <div
              className="font-bold w-full"
              style={{
                borderBottom: "1px solid #84c284",
              }}
            >
              <button
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                  textAlign: "right",
                  padding: "20px",
                  display: "block",
                  marginLeft: "auto",
                }}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <ClearIcon
                  sx={{
                    color: "white",
                    marginLeft: "auto",
                    fontSize: "30px",
                  }}
                />
              </button>
            </div>
            <div
              className="font-bold w-full pr-4 pl-4"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/works"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                How it works
              </Link>
            </div>
            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/solutions"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                Solutions
              </Link>
            </div>

            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/pricing"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                Pricing
              </Link>
            </div>

            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/about"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                About Us
              </Link>
            </div>

            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/contact"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                Contact Us
              </Link>
            </div>

            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/security"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                Security
              </Link>
            </div>

            <div
              className="font-bold w-full pr-4 pl-4 m-0"
              style={{
                margin: "0px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link
                href="/faq"
                style={{
                  fontWeight: "800",
                  fontSize: "48px",
                  color: "black",
                }}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
