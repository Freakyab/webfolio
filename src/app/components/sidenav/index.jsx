"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuItems } from "../pagesList";
import Button from "../button";
import Link from "next/link";

const SideNav = () => {
  const [dropDown, setDropDown] = useState(true);
  const pathname = usePathname();

  const SettingsIcon = () => (
    <svg
      viewBox="0 0 512 512"
      fill="rgb(255, 255, 255)"
      color="white"
      width={35}
      height={35}
    >
      <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
    </svg>
  );

  return (
    <>
      <div className="sideNav w-[60px] fixed calc_height">
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center pt-[18px] h-[74px]
            ${item.link === "/settings" ? "absolute bottom-0 left-3" : ""}
            ${
              pathname === item.link
                ? "active_border_line_top active_component_bg"
                : "transition duration-500 ease-in-out"
            }`
            
            }>
            <Link href={item.link}>
              <div className="w-[33px] h-[33px]">{item.icon}</div>
            </Link>
          </div>
        ))}
        
      </div>
      <div className="explorer w-[340px] calc_height">
        <div className="pl-[60px]">
          <span className="font-light text-white relative top-3 px-8">
            EXPLORER
          </span>
          <div
            className="w-full relative top-6 py-1 body_color text-white p-2 flex"
            onClick={() => setDropDown(!dropDown)}>
            <span
              className={` p-2 ${
                dropDown ? "rotate-0" : "rotate-[-90deg]"
              } transition-all duration-200 ease-in-out`}>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.30179 6.00084L0.212007 1.91107C-0.070669 1.62839 -0.070669 1.1713 0.212007 0.891631L0.891632 0.212007C1.17431 -0.0706689 1.6314 -0.0706689 1.91107 0.212007L4.81 3.11094L7.70893 0.212007C7.99161 -0.0706689 8.4487 -0.0706689 8.72837 0.212007L9.40799 0.891631C9.69067 1.17431 9.69067 1.6314 9.40799 1.91107L5.31822 6.00084C5.04155 6.28352 4.58446 6.28352 4.30179 6.00084Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>PORTFOLIO</span>
          </div>
          {dropDown ? (
            <div className="w-full relative flex flex-col top-6 py-1 text-white font-light text-sm ">
              {MenuItems.map((item, index) => (
                <Button pathname={pathname} item={item}  stroke={true}/>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SideNav;
