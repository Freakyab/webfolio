"use client";
import PageList from "../components/pagesList";

export default function About() {
  return (
    <main className="body_color w-[100vw] calc_height text-white font-mono overflow-scroll overflow-x-hidden">
      <PageList />
      <span className="mt-[100px] text-blue-800 font-light py-2 ">
        <span className="text-white text-sm">Freakyab / </span>
        <span className="text-white font-bold text-sm">Readme </span>
        .md
        <span className="text-white"> in</span>
        <span className="font-bold text-sm"> main</span>
      </span>
      <div className="p-3 mt-2 shadow-xl border-2 border-black">
        <p className="text-3xl">## About Me</p>
        <p className="mt-2 mb-2 text-sm">
          Hello! 👋 I'm a third-year computer engineering student at St. Vincent
          Pallotti College of Engineering, deeply passionate about web
          development. My skills span both frontend and backend technologies,
          and I'm thrilled to share my journey and knowledge with you.
        </p>

        <p className="text-3xl mt-4">### Education</p>
        <p className="mt-2 mb-2 text-sm" style={{ whiteSpace: "pre-wrap" }}>
          ---
          {<br />}- **Institution:**{" "}
          <span className="active-text">
            St. Vincent Pallotti College of Engineering{" "}
          </span>
          {<br />}- **Program:**{" "}
          <span className="active-text">Computer Engineering</span>
          {<br />}- **Year:** <span className="active-text">3rd Year </span>
          {<br />}---
        </p>
        <p className="text-3xl mt-3">### Frontend Skills</p>
        <ul className="list-disc ml-6 active-text">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <p className="mt-2 mb-2 text-sm">
          I love creating visually stunning and user-friendly interfaces,
          constantly exploring new techniques and frameworks to enhance my
          frontend development skills.
        </p>
        <p className="text-3xl mt-3">### Backend Skills</p>
        <ul className="list-disc ml-6 active-text">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API development</li>
        </ul>
        <p className="mt-2 mb-2 text-sm">
          I enjoy building robust and scalable server-side applications, always
          striving for efficient and secure backend systems.
        </p>
      </div>
    </main>
  );
}
