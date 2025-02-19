import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav  className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
    <div>
      <Link href="/">
        Home
      </Link>
      </div>
      <div className="hidden md:flex">
      <Link href="/about-us">
        About 
      </Link>
      <Link href="/contact-us">
        Contact Us
      </Link>
      </div>
    </nav>
  );
}
















