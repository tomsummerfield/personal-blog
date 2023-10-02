"use client" 

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <nav id="nav" className="px-[1rem] py-6 flex justify-between items-center">
      <h3 className="text-[1.3rem] font-bold text-white">Tom Summerfield</h3>
      <ul>
        <Link  href="/" className="hidden">
          Home
        </Link>
        <Link  href="/" className="hidden">
          Blog
        </Link>
        <Link  href="/" className="hidden">
          Contact
        </Link>
        <li onClick={() => setMobileNav(!mobileNav)}>
          <Image
            src="/hamburger-menu.png"
            width="30"
            height="30"
            alt="hamburger menu"
            className="cursor-pointer"            
          />
        </li>
      </ul>
      {mobileNav && 
            <div
            id="mobile_nav"
            className="absolute justify-center flex items-center top-0 left-0 px-[1rem] py-6 h-full w-full bg-[#132744]"
          >
            <span onClick={() => setMobileNav(!mobileNav)}>
              <Image
                src="/close.png"
                alt="Close button"
                width="30"
                height="30"
                className="absolute right-[1rem] top-6"                
              />
            </span>
            <ul className="flex flex-col space-y-[4rem]">
              <Link  href="/" className="text-white text-[23px] font-light">
                Home
              </Link>
              <Link  href="/" className="text-white text-[23px] font-light">
                Blogs
              </Link>
              <Link  href="/" className="text-white text-[23px] font-light">
                Contact
              </Link>
            </ul>
          </div>
      }

    </nav>
  );
}
