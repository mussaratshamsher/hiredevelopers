

"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 768); 
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isSmallScreen) {
      setMenuOpen(false);
    }
  };

  return (
      <main className="container max-w-[1440px] mx-auto">

        <header className="w-full h-24 flex items-center justify-between fixed top-0 right-0 p-4
         bg-teal-900 text-white">
          <h1 className="font-extrabold text-2xl">Hiredev</h1>
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl `} />
          </button>

          <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} absolute md:static w-full top-16 right-0 text-center md:flex md:justify-end`}>
            <ul className="flex flex-col bg-teal-900 md:bg-transparent md:flex-row">
              <li className="p-2 hover:text-yellow-400">
                <Link href="/" onClick={handleLinkClick}>  HOME</Link></li>
              
              <li className="p-2 hover:text-yellow-400">
                <Link href="/about" onClick={handleLinkClick}> ABOUT</Link>  </li>
        
              <li className="p-2 hover:text-yellow-400">
                <Link href="/jobs" onClick={handleLinkClick}> JOBS</Link>   </li>          
        
              <li className="p-2 hover:text-yellow-400">
                <Link href="/experts" onClick={handleLinkClick}>  FREELANCERS</Link>   </li>              
              
              <li className="p-2 hover:text-yellow-400">
                <Link href="auth" onClick={handleLinkClick}>
                  LOGIN/SIGN UP </Link> </li>
                   </ul>
          </nav>

        </header>
        
      </main>
  );
}

