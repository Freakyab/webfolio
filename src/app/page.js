"use client";
import React, { useMemo } from "react";
import PageList from "./components/pagesList";

const TypeEffect = () => {
  const array = useMemo(
    () => [
      "Aryan       ",
      "Devop       ",
      "Programmer  ",
      "Designer     ",
      "Engineer  ",
      "Awesome   ",
    ],
    []
  );
  const letter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const [iter, setIter] = React.useState(0);
  const [text, setText] = React.useState(array[0]);
  const [arrayIndex, setArrayIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setText(
        text
          .split("")
          .map((item,index) => {
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
        setIter(iter + 0.1);
      }

      if (arrayIndex === array.length - 1 && iter >= array[arrayIndex].length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text, arrayIndex, iter, array]);

  return (
    <div>
      <span className="absolute text-[170px] top-20 opacity-10 font-mono">
        FOLLOW
        <div> ME</div>
      </span>
      <img src="/assets/home.png" className="absolute right-12 mt-10 w-90" />
      <div className="p-10">
        <h1 className="text-6xl font-semibold px-2 pt-28 w-fit">Hello,</h1>
        <div className="py-5 text-4xl px-10 ">
          <h2 className="first-letter:text-8xl font-thin ">
            I am {"<"}
            <span className="active-text font-bold">{text}</span>
            {">"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="body_color w-[100vw]  calc_height text-white">
      <PageList />

      {TypeEffect()}
    </main>
  );
}
