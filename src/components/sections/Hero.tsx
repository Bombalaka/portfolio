"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [activeTag, setActiveTag] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const tags = ["C#", "AWS", "Flutter"];
  const finalText = "Yotaka";

  // Auto-rotate tags
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tags.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [tags.length]);

  // Typewriter animation
  useEffect(() => {
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= finalText.length) {
        setDisplayText(finalText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 300); // 300ms per bokstav = långsamt

    return () => clearInterval(typeInterval);
  }, []);

  // Blinkande cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side - Text */}
        <div className="flex-1 space-y-6">
        <div className="flex flex-col items-start gap-2">
  {/* SVG Black Ant */}
  <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-8">
    {/* Back body */}
    <ellipse cx="32" cy="48" rx="10" ry="12" fill="#1a1a1a"/>
    {/* Middle body */}
    <ellipse cx="32" cy="32" rx="6" ry="6" fill="#1a1a1a"/>
    {/* Head */}
    <ellipse cx="32" cy="18" rx="8" ry="7" fill="#1a1a1a"/>
    {/* Eyes */}
    <circle cx="28" cy="16" r="2" fill="white"/>
    <circle cx="36" cy="16" r="2" fill="white"/>
    {/* Antennas */}
    <path d="M26 12 Q22 4 18 6" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M38 12 Q42 4 46 6" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Legs - left */}
    <path d="M26 30 L14 24" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M26 34 L12 36" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 42 L12 48" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Legs - right */}
    <path d="M38 30 L50 24" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 34 L52 36" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M40 42 L52 48" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
  
  {/* Badge */}
  <div className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-full text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    ✨ Welcome to my bug&apos;s life!
  </div>
</div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-gray-900">
            Hi, I&apos;m{" "}
            <span className="text-yellow-500">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-700">
            A <span className="bg-yellow-300 px-2 py-1 rounded font-medium">Cloud Developer</span> who loves building cool stuff with{" "}
            <span className={`px-2 py-1 rounded font-medium transition-all duration-300 ${activeTag === 0 ? 'bg-blue-500 text-white scale-110' : 'bg-blue-200'}`}>
              C#
            </span>,{" "}
            <span className={`px-2 py-1 rounded font-medium transition-all duration-300 ${activeTag === 1 ? 'bg-orange-500 text-white scale-110' : 'bg-orange-200'}`}>
              AWS
            </span>, and{" "}
            <span className={`px-2 py-1 rounded font-medium transition-all duration-300 ${activeTag === 2 ? 'bg-cyan-500 text-white scale-110' : 'bg-cyan-200'}`}>
              Flutter
            </span>!
          </p>
          
          <div className="flex gap-4">
            <Link
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition border-2 border-black shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]"
            >
              See My Work 🚀
            </Link>
            <Link
              href="#contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border-2 border-black"
            >
              Contact Me 👋
            </Link>
          </div>
        </div>

        {/* Right side - Code snippet */}
        <div className="flex-1">
          <div className="bg-yellow-300 p-4 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-pink-400">public class</div>
              <div className="text-green-400 text-lg font-bold">CloudDeveloper</div>
              <div className="text-white">{"{"}</div>
              <div className="text-white ml-4">
                <span className="text-blue-400">string</span> name = <span className="text-yellow-300">&quot;Yotaka&quot;</span>;
              </div>
              <div className="text-white ml-4">
                <span className="text-blue-400">string[]</span> skills = {"{"}
              </div>
              <div className="text-yellow-300 ml-8">&quot;AWS&quot;, &quot;C#&quot;, &quot;Flutter&quot;</div>
              <div className="text-white ml-4">{"};"}</div>
              <div className="text-gray-400 ml-4">
                <span className="animate-pulse text-green-400">// Building cool stuff! 🚀</span>
              </div>
              <div className="text-white">{"}"}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}