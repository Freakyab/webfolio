"use client";
import React, { useState, useEffect } from "react";
import {marked} from "marked";
import "github-markdown-css/github-markdown.css";

export default function ProjectDetails({
  params,
}: {
  params: { name: string };
}) {
  const name = params.name;
  const [projectReadme, setProjectReadme] = useState<string>("");

  useEffect(() => {
    const fetchProjects = async () => {
        console.log(name);
      const res = await fetch(
        `https://raw.githubusercontent.com/freakyab/${name}/master/README.md`,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      const resdata = await res.text();
      if (resdata !== "404: Not Found") {
        setProjectReadme(resdata);
      }else{
        const res2 = await fetch(
            `https://raw.githubusercontent.com/freakyab/${name}/main/README.md`,
            {
                headers: {
                "Content-Type": "text/plain",
                },
            }
            );
            const resdata2 = await res2.text();
            setProjectReadme(resdata2);

      }
    };
    fetchProjects();
  }, [name]);

  const createMarkup = (markdown: string) => {
    const html = marked(markdown);
    return { __html: html };
  };

  return (
    <div className="w-full nav-min-height text-white overflow-auto p-3">
      <div
        className="markdown-body p-3 shadow-xl rounded-lg"
        dangerouslySetInnerHTML={createMarkup(projectReadme)}
      />
     </div>
  );
}
