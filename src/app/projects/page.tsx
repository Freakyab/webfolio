"use client";
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import PageList from "../components/pageList";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState<projectProps[]>([]);

  function extractAttributes(obj: projectsProps) {
    return {
      id: obj.id,
      name: obj.name,
      description: obj.description,
      homepage: obj.homepage,
      avatar_url: obj.owner.avatar_url,
      url: obj.html_url,
      language: obj.language,
    };
  }

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      // Fetching all public repositories of the user
      const response = await fetch(
        "https://api.github.com/users/freakyab/repos?per_page=100"
      );
      const data = await response.json();

      const filteredProjects = data
        .filter((e: { topics: string[] }) => e.topics.includes("showcase"))
        // .map ((item: projectsProps) => console.log(item.name))
        .map((item: projectsProps) => extractAttributes(item));

      if (isMounted) {
        setProjects(filteredProjects);
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="body_color pl-12 sm:pl-0  w-[100vw] overflow-hidden calc_height text-white font-mono ">
      <PageList />
      <div className="w-full nav-min-height pb-6 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-3">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="navbar rounded-lg shadow-lg hover:shadow-2xl overflow-hidden text-white w-[250px] lg:w-[300px]">
                <div className="relative">
                  <img
                    src={project.avatar_url}
                    alt={project.name}
                    className="w-full h-52 object-cover"
                  />
                  <button
                    onClick={() => window.open(project.homepage)}
                    className="absolute w-5 h-5 flex justify-center items-center hover:scale-105 rounded-full bg-white top-3 left-3">
                    <FaExternalLinkAlt className="text-black" size={10} />
                  </button>
                </div>
                <div className="p-6 flex-col gap-3 flex h-full">
                  <div className="flex justify-between gap-3 items-center">
                    <h2
                      className="text-base font-semibold line-clamp-1 capitalize"
                      title={project.name}>
                      {project.name}
                    </h2>
                    <div className="relative inline-flex  group">
                      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <span className="relative inline-flex items-center justify-center p-2 text-xs  text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        {project.language}
                      </span>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <p className="text-sm text-gray-300 mb-4 h-72 overflow-auto">
                      {project.description}
                    </p>
                    <div className=" absolute bottom-1 flex flex-col justify-between items-start">
                      <Link
                        href={project.url}
                        target="_blank"
                        className="text-blue-500 flex text-nowrap hover:text-white group w-full hover:underline">
                        View on GitHub
                        <span className="group-hover:px-2 transition-all duration-100 ease-out w-full">
                          {">>"}
                        </span>
                      </Link>
                      <Link
                        href={`/projects/${project.name}`}
                        className="text-blue-500 flex text-nowrap hover:text-white group w-full hover:underline">
                        Read More
                        <span className="group-hover:px-2 transition-all duration-100 ease-out w-full">
                          {">>"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
}
