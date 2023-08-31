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
      className={`flex-1 flex flex-col p-6 space-y-4 ml-[270px] overflow-hidden`}
      style={{
        maxWidth: `calc(100vw - ${screen.width * 0.17}px)`,
      }}
    >
      <p className="text-xl ml-3">{title}</p>
      <div
        className={`
            flex 
            flex-col
            flex-1
            w-full 
            bg-white
            dark:bg-gray-backgroundDark
            rounded-3xl
            py-6
            px-8
            space-y-5
        `}
        style={{
          height: `calc(100vh - ${screen.height * 0.17}px)`,
        }}
      >
        {children}
      </div>
    </main>
  );
}
