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
  },
  {
    name: "Monokai",
    colors: {
      "--bg-color": "#282a36",
      "--bg-nav": "#191a21",
      "--active-component-line": "#66d9ef",
      "--active-component-bg": "#44475a",
      "--sidebar-bg": "#343746",
      "--bg-main": "#21222c",
    },
  },
  {
    name: "GitHub Dark",
    colors: {
      "--bg-color": "#1e2127",
      "--bg-nav": "#1e2127",
      "--active-component-line": "#0366d6",
      "--active-component-bg": "#2d333b",
      "--sidebar-bg": "#1e2127",
      "--bg-main": "#1e2127",
    },
  },
  {
    name: "Dark Blue",
    colors: {
      "--bg-color": "#001f3f",
      "--bg-nav": "#001f3f",
      "--active-component-line": "#0074cc",
      "--active-component-bg": "#003366",
      "--sidebar-bg": "#001f3f",
      "--bg-main": "#001f3f",
    },
  },
  {
    name: "Dark Green",
    colors: {
      "--bg-color": "#004d00",
      "--bg-nav": "#004d00",
      "--active-component-line": "#00cc44",
      "--active-component-bg": "#006600",
      "--sidebar-bg": "#004d00",
      "--bg-main": "#004d00",
    },
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
    <main className={`body_color w-[100vw] calc_height text-white font-mono overflow-scroll overflow-x-hidden`} style={selectedTheme.colors}>
      <PageList />
      <div className="flex space-x-4 mt-4">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => handleThemeChange(theme)}
            className={`py-2 px-4 rounded focus:outline-none ${
              selectedTheme.name === theme.name ? "bg-gray-700" : "bg-gray-500"
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </main>
  );
}
