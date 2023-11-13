"use client";
import React, { useState, useEffect } from "react";
import PageList from "../components/pagesList";

export default function Projects() {
  const repoTitles = [
    { title: "Spend-Wise", label: ["Backend", "Frontend"] },
    { title: "Blogger-s-Play", label: ["Frontend", "Backend", "MongoDB"] },
    { title: "CodeExchange", label: ["Frontend", "Backend", "MongoDB"] },
    {
      title: "Data-Structures-Algorithms-Akatsuki-Coding-CLub",
      label: ["Frontend"],
    },
    { title: "Firebase_learn", label: ["Database"] },
    { title: "Freakyab", label: ["Frontend", "Backend", "FireBase"] },
    { title: "linkedincopy", label: ["Frontend", "Backend", "MongoDB"] },
    { title: "OnlineVideoLearn", label: ["Frontend"] },
    { title: "Webmusic", label: ["Frontend"] },
  ];

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Freakyab/repos"
        );

        if (response.ok) {
          const repositories = await response.json();

          // Filter repositories based on repoTitles
          const filteredRepos = repositories.filter((repo) =>
            repoTitles.some(
              (title) => title.title.toLowerCase() === repo.name.toLowerCase()
            )
          );

          // Assign unique colors to labels
          const coloredRepos = filteredRepos.map((repo) => {
            const labels =
              repoTitles.find(
                (title) => title.title.toLowerCase() === repo.name.toLowerCase()
              )?.label || [];
            const coloredLabels = Array.isArray(labels)
              ? labels.map((label, index) => ({
                  name: label,
                  color: `#${index}${index}a${index}a`,
                }))
              : [{ name: labels, color: "#999999" }]; // Default color for single labels
            return { ...repo, coloredLabels };
          });

          // Set the state with coloredRepos
          setRepos(coloredRepos);
        } else {
          console.error("Failed to fetch repositories:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []); // Run the effect once on component mount

  const getColorForLabel = (labelName) => {
    const colorMap = {
      Frontend: "#d73a4a",
      Firebase: "#0075ca",
      Backend: "#7057ff",
      MongoDB: "green", // Using the same color for MongoDB as Backend
      Database: "#0075ca", // Using the same color for Database as Firebase
    };

    return colorMap[labelName] || "#000000"; // Default to black if color is not specified
  };

  // ... (previous code)

  return (
    <main className="body_color w-[100vw] calc_height text-white font-mono overflow-scroll overflow-x-hidden">
      <PageList />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="text-sm mt-2">{repo.description}</p>
            <div className="mt-2 flex flex-wrap">
              {repo.coloredLabels &&
                repo.coloredLabels.map((label) => (
                  <span
                    key={label.name}
                    className="text-xs rounded-full px-2 py-1 mr-2 mt-2 border border-black"
                    style={{
                      backgroundColor: getColorForLabel(label.name),
                      color: "white",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "3em",
                      minHeight: "1.5em",
                      borderRadius: "999px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
                      filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.25))",
                    }}>
                    {label.name}
                  </span>
                ))}
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
