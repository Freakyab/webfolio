"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import PageList from "./components/pageList";
import { RiLoader3Fill } from "react-icons/ri";
import { useRouter } from "nextjs-toploader/app";

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
            if (index < iter) return array[arrayIndex][index];
            return letter[Math.floor(Math.random() * letter.length)];
          })
          .join("")
      );

      if (iter >= array[arrayIndex].length) {
        setArrayIndex((arrayIndex + 1) % array.length);
        setIter(0);
      } else {
        setIter(iter + 0.06);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text, arrayIndex, iter, array]);


  return (
    <div className="overflow-hidden h-12 sm:h-16 md:h-20">
      <div className="font-mono text-2xl sm:text-3xl md:text-5xl transition-transform duration-500">
        <span className="text-teal-400">{text}</span>
      </div>
    </div>
  );
};

const Home = () => {
  const [image, setImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://imageuploaderfreakyab.vercel.app/api/getImage/666d2b4fe01f66c2d3117195"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.imageUrl) {
          setImage(data.imageUrl);
          setIsLoaded(true);
        }
      });
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <PageList />
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,200,0.1),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-7rem)] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full py-8 md:py-0">
            <div className="space-y-4 sm:space-y-6 md:space-y-10 z-10 text-center md:text-left ">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
                Hey, <br className="hidden md:block" />
                I'm a
              </h1>

              <TypeEffect />

              <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
                Crafting digital experiences through code and creativity
              </p>

              <button
                onClick={() => router.push("/contact")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transform hover:scale-105 transition-transform"
                aria-label="Contact me">
                <span className="absolute inset-0 w-full h-full transform transition-transform translate-x-1 translate-y-1 bg-teal-400 group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="absolute inset-0 w-full h-full bg-black border-2 border-teal-400 group-hover:bg-teal-400" />
                <span className="relative text-teal-400 group-hover:text-black">
                  Let's Connect
                </span>
              </button>
            </div>

            <div className="relative flex justify-center items-center">
              {isLoaded ? (
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 animate-pulse bg-teal-400/20 rounded-full blur-xl" />
                  <div className="relative rounded-full overflow-hidden border-2 border-teal-400 shadow-lg shadow-teal-400/20">
                    <Image
                      src={image}
                      alt="Profile picture"
                      width={400}
                      height={400}
                      className="object-cover transition-transform hover:scale-110 duration-700"
                      priority
                    />
                  </div>
                </div>
              ) : (
                <RiLoader3Fill className="animate-spin text-teal-400 text-4xl sm:text-5xl md:text-6xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
