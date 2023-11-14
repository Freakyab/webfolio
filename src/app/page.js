"use client";
import React, { useMemo, useState, useEffect } from "react";
import PageList from "./components/pagesList";

const TypeEffect = () => {
  const array = useMemo(
    () => [
      "Aryan.........",
      "Developer.....",
      "Programmer....",
      "Designer......",
      "Engineer......",
      "Awesome.......",
    ],
    []
  );
  const letter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [iter, setIter] = useState(0);
  const [text, setText] = useState(array[0]);
  const [arrayIndex, setArrayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((item, index) => {
            if (index < iter) {
              return array[arrayIndex][index];
            } else {
              return letter[Math.floor(Math.random() * letter.length)];
            }
          })
          .join("")
      );

      if (iter >= array[arrayIndex].length) {
        setArrayIndex((arrayIndex + 1) % array.length);
        setIter(0);
      } else {
        setIter(iter + 0.06);
      }

      if (arrayIndex === array.length - 1 && iter >= array[arrayIndex].length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text, arrayIndex, iter, array]);

  return (
    <div
      className="mt-[50%] sm:mt-0 sm:grid grid-cols-1 sm:grid-cols-3 gap-1 sm:ml-0 h-[calc(100vh-190px)] font-medium "
      style={{ textShadow: "0px 0px 10px rgba(255,255,255,0.5)" }}
    >
      <div className="col-span-1 sm:col-span-1 grid place-items-center">
        <h1 className="text-3xl sm:text-6xl">Hello,</h1>
      </div>
      <div className="col-span-1 mr-auto sm:col-span-2 grid place-items-center">
        <p className="text-xl sm:text-4xl font-light">
          I am {"<"} <span
            className="active-text font-extrabold "
            style={{ textShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
          >
            {text}
          </span>
          {"/>"}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="body_color pl-12 md:pl-0  w-[100vw] calc_height text-white">
      <PageList />
      <div className="fixed h-full pl-10 mt-[10%] md:mt-0 ml-10 solidText font-bold text-[5rem] md:text-[10rem] opacity-10 z-2">
        BUILD <span className=" ">WHAT</span> <br />
        YOU <code className="outLine ">LOVE</code>
      </div>
      <TypeEffect />
    </main>
  );
};

export default Home;
