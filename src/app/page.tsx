"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import PageList from "./components/pageList";

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
    <div className="font-medium text-white" style={{ textShadow: "0px 0px 10px rgba(255,255,255,0.5)" }}>
      <div className="">
        <p
          className="text-xl sm:text-4xl font-light"
          style={{
            fontFamily: "monospace",
          }}
        >
          I am {"<"}{" "}
          <span
            className="active-text font-extrabold"
            style={{ textShadow: "0px 0px 5px rgba(255,255,255,0.2)" }}
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
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://imageuploaderfreakyab.vercel.app/api/getImage/666d2b4fe01f66c2d3117195",
          {
            method: "GET",
            mode: "cors",
            headers: {
              Accept: "*/*",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.imageUrl) {
              setImage(data.imageUrl);
            }
          });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="body_color pl-12 md:pl-0 w-full text-white">
      <PageList />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-16 gap-8">
        <div className="flex flex-col items-start justify-center gap-9 relative z-10 rounded-lg py-16 px-8 active-border-all transition-all duration-500 shadow-lg shadow-black hover:bg-black hover:text-white">
          <h1 className="text-5xl font-bold animate-pulse">Hi,</h1>
          <TypeEffect />
          <p className="text-xl sm:text-3xl font-light italic bg-white text-black rounded-lg p-3 shadow-lg shadow-black">
            {`<> "Build what you love" </>`}
          </p>
          <button 
            className="bg-white text-black  italic text-xl py-2 px-4 rounded-md capitalize transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = "/contact"}
          >
            Contact me
          </button>
        </div>
        <div className="flex justify-center relative">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full transition-transform">
            {image && (
              <Image
                src={image || "/default-profile.png"} // Fallback image if `image` is empty
                alt="profile"
                width={300}
                height={300}
                className="rounded-full filter grayscale shadow-lg hover:grayscale-0 transition-all duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
