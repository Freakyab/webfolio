"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuItems } from "../pagesList";
import Button from "../button";
import Link from "next/link";

const SideNav = () => {
  const [dropDown, setDropDown] = useState(true);
  const pathname = usePathname();

  return (
    <>
      <div className="sideNav w-[50px] fixed calc_height">
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center pt-[18px] h-[60px]
            ${item.link === "/settings" ? "px-2 absolute bottom-6" : ""}
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
      <div className="explorer hidden-tab w-[330px] calc_height ">
        <div className="pl-[50px]">
          <span className="font-light text-white relative top-3 px-8">
            EXPLORER
          </span>
          <div
            className="w-full relative top-6 py-1 body_color text-white p-2 flex shadow-2xl border-black border-r "
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
            <span
            className="cursor-pointer"
            >PORTFOLIO</span>
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
