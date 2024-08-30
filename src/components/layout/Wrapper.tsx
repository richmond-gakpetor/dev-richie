"use client"

import React, { useState, useEffect } from 'react';
import Content from "@/components/Content";
import Sidebar from "@/components/sidebar/Sidebar";

const Wrapper = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen">
      <Sidebar className="hidden lg:overflow-x-hidden w-full lg:fixed lg:top-0 max-w-[20rem] lg:block" />
      <main className="h-full lg:ml-[20rem]">
        <Content />
      </main>
      <div
        className={`
          absolute bottom-0 right-4 
          transition-opacity duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <p className='opacity-50'>Inspired by
          <a
            href='https://github.com/noahgsolomon'
            className='text-blue-500 hover:underline ml-1'
          >
            Noah Solomon
          </a>
        </p>
      </div>
    </div>
  );
};

export default Wrapper;