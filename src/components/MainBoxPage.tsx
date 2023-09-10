"use client";

import { ReactNode, useEffect, useState } from "react";

export function MainBoxPage({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [screen, setScreen] = useState({
    width: 1024,
    height: 720,
  });

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <main
      className={`flex-1 flex flex-col sm:p-4 md:p-6 space-y-4 sm:ml-0 md:ml-[270px] overflow-hidden`}
      style={{
        maxWidth:
          screen.width >= 600 ? `calc(100vw - ${screen.width * 0.17}px)` : "",
      }}
    >
      {/* <p className="text-xl ml-3">{title}</p> */}
      <div
        className={`
            flex 
            flex-col
            flex-1
            w-full 
            bg-white
            dark:bg-gray-backgroundDark
            rounded-3xl
            md:py-6
            sm:py-3
            md:px-8
            sm:px-5
            md:space-y-5
            sm:space-y-3
        `}
        style={{
          height:
            screen.width >= 600
              ? `calc(100vh - ${screen.height * 0.17}px)`
              : "",
        }}
      >
        {children}
      </div>
    </main>
  );
}
