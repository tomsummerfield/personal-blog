"use client";
import React from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";

export default function Footer() {
  const router = usePathname();
  const slug = router.substring("/blog/".length);

  return (
    <footer id="footer" className="bg-[#000E2B]">
      <div
        id="container"
        className="px-[1rem] py-[1.4rem] mx-auto max-w-screen-2xl md:px-[6rem] md:py-[6rem]"
      >
        <div className="md:flex md:items-center md:justify-between">
          <h3 className="text-white font-semibold md:text-[22px]">
            Tom Summerfield
          </h3>
          <ul className="flex mt-[2rem] gap-[1.25rem] md:mt-0 md:gap-[3rem]">
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer">HOME</a>
              ) : (
                <Link
                  to="hero"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer"
                >
                  HOME
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer">BLOGS</a>
              ) : (
                <Link
                  to="blogs"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer"
                >
                  BLOGS
                </Link>
              )}
            </li>
            <li>
              {slug.length > 0 ? (
                <a href="/" className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer">CONTACT</a>
              ) : (
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-white font-light md:text-[20px] hover:text-blue-500 cursor-pointer"
                >
                  CONTACT
                </Link>
              )}
            </li>                        
          </ul>
        </div>
        <div className="border-[0.5px] border-b-[#fafafa33] mt-[1.8rem] md:block"></div>
        <p className="mt-3 text-white font-light md:mt-7 md:text-[20px]">
          Copyright ©2023 Tom Summerfield
        </p>
      </div>
    </footer>
  );
}
