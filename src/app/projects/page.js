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
    { title: "Firebase_learn", label: ["FireBase"] },
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

          const sortedRepos = filteredRepos.sort((a, b) => {
            const aTitle = repoTitles.find(
              (title) => title.title.toLowerCase() === a.name.toLowerCase()
            );
            const bTitle = repoTitles.find(
              (title) => title.title.toLowerCase() === b.name.toLowerCase()
            );
            return (
              repoTitles.indexOf(aTitle) - repoTitles.indexOf(bTitle) ||
              a.name.localeCompare(b.name)
            );
          });

          // Assign unique colors to labels
          const coloredRepos = sortedRepos.map((repo) => {
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

  return (
    <main className="body_color pl-10 sm:pl-0 w-[100vw] calc_height text-white font-mono overflow-auto overflow-x-hidden">
      <PageList />
      <div className="grid grid-cols-1 gap-4 mb-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-bold capitalize">{repo.name}</h3>
            <p className="text-sm mt-2">{repo.description}</p>
            <div className="mt-2 flex flex-wrap">
              {repo.coloredLabels &&
                repo.coloredLabels.map((label) => (
                  <span key={label.name} className="px-2 mx-1 button ">
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
