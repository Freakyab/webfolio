"use client";
import React, { useState } from "react";
import PageList from "../components/pageList";
import { themes } from "../components/themes";

export default function Settings() {
  const [selectedTheme, setSelectedTheme] = useState(themes[1]);

  const applyTheme = (theme: themeProps) => {
    Object.entries(theme.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };
  
  const handleThemeChange = (theme: themeProps) => {
    setSelectedTheme(theme);
    applyTheme(theme);
  };

  return (
    <main
      className={`body_color w-[100vw] pl-10 sm:pl-0 h-full text-white font-mono overflow-x-hidden`}
      // style={selectedTheme.colors}
    >
      <PageList />
      <div className="flex flex-col sm:flex-row ml-2 space-x-4 mt-4 justify-center items-center">
        {themes.map((theme) => (
          <div className="flex flex-col">
            <img
              src={theme.link}
              className="w-[400px] h-[400px] rounded-t-3xl"
            />
            <button
              key={theme.name}
              onClick={() => handleThemeChange(theme)}
              className={`py-2 px-4 rounded focus:outline-none transition duration-300 ${
                selectedTheme.name === theme.name
                  ? "bg-gray-800"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}>
              {theme.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
