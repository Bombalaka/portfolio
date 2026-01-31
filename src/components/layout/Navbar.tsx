"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          👋 Yotaka
        </Link>

        {/* Navigation Links + CTA - grouped together on right */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-gray-600">
            <Link href="#about" className="hover:text-yellow-500 transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-yellow-500 transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-yellow-500 transition">
              Projects
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/?contact=form#contact"
            className="bg-yellow-300 px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-gray-600"
          >
            Say Hello! 👋
          </Link>
        </div>
      </div>
    </nav>
  );
}