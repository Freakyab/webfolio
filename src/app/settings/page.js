"use client";
import React, { useState } from "react";
import PageList from "../components/pagesList";

const themes = [
  {
    name: "Dracula",
    colors: {
      "--bg-color": "#282a36",
      "--bg-nav": "#191a21",
      "--active-component-line": "#ff79c6",
      "--active-component-bg": "#44475a",
      "--sidebar-bg": "#343746",
      "--bg-main": "#21222c",
    },
    link: "https://repository-images.githubusercontent.com/459748286/e3df890d-f648-42e3-96d2-8b8ef64f01d8",
  },
  {
    name: "GitHub Dark",
    colors: {
      "--bg-color": "#1e1e1e",
      "--bg-nav": "#323233",
      "--active-component-line": "#0366d6",
      "--active-component-bg": "#2d333b",
      "--sidebar-bg": "#333333",
      "--bg-main": "#252526",
    },
    link: "https://img.crx4chrome.com/19/ec/59/odkdlljoangmamjilkamahebpkgpeacp-featured.webp",
  },
  {
    name: "Dark Blue",
    colors: {
      "--bg-color": "#030c1b",
      "--bg-nav": "#000815",
      "--active-component-line": "#0163e2",
      "--active-component-bg": "#000810",
      "--sidebar-bg": "#000815",
      "--bg-main": "#030000",
    },
    link: "https://cdn.dribbble.com/users/6569/screenshots/16169741/media/851c7266882dcfcf51a7370fae1d5af1.png?resize=400x0",
  },
];

export default function Settings() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const applyTheme = (theme) => {
    Object.entries(theme.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    applyTheme(theme);
  };

  return (
    <main
      className={`body_color w-[100vw] h-full text-white font-mono overflow-x-hidden`}
      style={selectedTheme.colors}>
      <PageList />
      <div className="flex ml-2 space-x-4 mt-4 justify-center items-center">
        {themes.map((theme) => (
          <div className="flex flex-col">
            <img src={theme.link} className="w-[400px] h-[400px] rounded-t-3xl"/>
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
