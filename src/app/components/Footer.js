import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#000E2B]">
      <div id="container" className="px-[1rem] py-[1.4rem]">
        <h3 className="text-white font-semibold">Tom Summerfield</h3>
        <ul className="flex mt-[2rem] gap-[1.25rem]">
          <li>
            <Link href="/" className="text-white font-light">HOME</Link>
          </li>
          <li>
            <Link href="/" className="text-white font-light">BLOG</Link>
          </li>
          <li>
            <Link href="/" className="text-white font-light">CONTACT</Link>
          </li>
        </ul>
        <div className="border-[0.5px] border-b-[#fafafa33] mt-[1.8rem]"></div>
        <p className="mt-3 text-white font-light">
          Copyright ©2023 Tom Summerfield
        </p>
      </div>
    </footer>
  );
}
