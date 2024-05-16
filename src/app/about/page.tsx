"use client";
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import PageList from "../components/pageList";
import "github-markdown-css/github-markdown.css";

export default function About() {
  const [projectReadme, setProjectReadme] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
      console.log(name);
      const res = await fetch(
        `https://raw.githubusercontent.com/freakyab/freakyab/main/README.md`,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      const resdata = await res.text();
      if (resdata !== "404: Not Found") {
        setProjectReadme(resdata);
      }
    };
    fetchProjects();
  }, []);
  const createMarkup = (markdown: string) => {
    const html = marked(markdown);
    return { __html: html };
  };

  // return (
  //   <div className="w-full nav-min-height text-white overflow-auto p-3">
  //     <div
  //       className="markdown-body p-3 shadow-xl rounded-lg"
  //       dangerouslySetInnerHTML={createMarkup(projectReadme)}
  //     />
  //    </div>
  // );
  return (
    <main className="body_color pl-12 sm:pl-0  w-[100vw] overflow-x-auto calc_height text-white font-mono">
      <PageList />
      <div className="p-3">
        <div
          className="markdown-body p-3 shadow-xl rounded-lg"
          dangerouslySetInnerHTML={createMarkup(projectReadme)}
        />
      </div>
    </main>
  );
}
