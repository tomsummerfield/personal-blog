"use client" 

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { scrollTo } from "next/router";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)
  const router = usePathname();
  const slug = router.substring("/blog/".length);
  
  return (
    <nav id="nav" className="px-[1rem] py-6 flex justify-between items-center max-w-screen-2xl mx-auto md:px-[6rem]">
      <a className="text-[1.3rem] font-semibold text-white md:text-[20px]" href="/">Tom Summerfield</a>
      <ul className="flex space-x-[2rem]">
      <li>
              {slug.length > 0 ? (
                <a href="/" className="hidden md:flex text-white text-[20px] font-normal md:text-[20px] hover:text-blue-500">Home</a>
              ) : (
                <Link
                  to="hero"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hidden md:flex text-white text-[23px] font-light hover:text-blue-500"
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="hidden md:flex text-white text-[20px] font-normal md:text-[20px] hover:text-blue-500">Blogs</a>
              ) : (
                <Link
                  to="blogs"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hidden md:flex text-white text-[23px] font-light hover:text-blue-500"
                >
                  Blogs
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="hidden md:flex text-white text-[20px] font-normal md:text-[20px] hover:text-blue-500">Contact</a>
              ) : (
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hidden md:flex text-white text-[23px] font-light hover:text-blue-500"
                >
                  Contact
                </Link>
              )}
            </li>

        <li onClick={() => setMobileNav(!mobileNav)}>
          <Image
            src="/hamburger-menu.png"
            width="30"
            height="30"
            alt="hamburger menu"
            className="cursor-pointer md:hidden"            
          />
        </li>
      </ul>
      {mobileNav && 
            <div
            id="mobile_nav"
            className="absolute justify-center flex items-center top-0 left-0 px-[1rem] py-6 h-full w-full bg-[#132744] z-50"
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
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white text-[23px] font-light hover:text-blue-500">Home</a>
              ) : (
                <Link
                  to="hero"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-white text-[23px] font-light"
                  onClick={()=>setMobileNav(!mobileNav)}
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white text-[23px] font-light hover:text-blue-500">Blogs</a>
              ) : (
                <Link
                  to="hero"
                  smooth={true}
                  offset={300}
                  duration={500}
                  className="text-white text-[23px] font-light"
                  onClick={()=>setMobileNav(!mobileNav)}
                >
                  Blogs
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white text-[23px] font-light hover:text-blue-500">Contact</a>
              ) : (
                <Link
                  to="hero"
                  smooth={true}
                  offset={500}
                  duration={500}
                  className="text-white text-[23px] font-light"
                  onClick={()=>setMobileNav(!mobileNav)}
                >
                  Contact
                </Link>
              )}
            </li>
            </ul>
          </div>
      }

    </nav>
  );
}
