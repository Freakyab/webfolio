"use client";
import { usePathname } from "next/navigation";
import Button from "../button";

const ExploreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="1 0 21 24"
    width={25}
    height={25}>
    <path
      d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"
      fill="#fff"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 512 512"
    fill="rgb(255, 255, 255)"
    color="white"
    width={25}
    height={25}>
    <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 512 512" color="white" width={25} height={25}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M304 160l-64-64 64-64M207 352l64 64-64 64"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M160 96 A48 48 0 0 1 112 144 A48 48 0 0 1 64 96 A48 48 0 0 1 160 96 z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M448 416 A48 48 0 0 1 400 464 A48 48 0 0 1 352 416 A48 48 0 0 1 448 416 z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
    />
  </svg>
);
const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(255, 255, 255)" width={25} height={25}>
    <path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z" />
  </svg>
);

const ProjectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 0 24 24"
    fill="rgb(255, 255, 255)"
    width={30}
    height={30}>
    <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(20, 115, 133)" height="1em" width="1em">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
  </svg>
);

const JsonIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(224, 173, 46)" height="1em" width="1em">
    <path d="M5 3h2v2H5v5a2 2 0 01-2 2 2 2 0 012 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 00-2-2H0v-2h1a2 2 0 002-2V5a2 2 0 012-2m14 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2m-7 12a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m-4 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1m8 0a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1z" />
  </svg>
);
const MdIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(65, 163, 243)" height="1em" width="1.2em">
    <path d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M3.44 6.94c-.26 0-.48.21-.48.47v9.19c0 .25.22.46.48.46h17.12c.26 0 .48-.21.48-.46V7.41c0-.26-.22-.47-.48-.47H3.44m1.45 8.25V8.81h1.92l1.92 2.35 1.92-2.35h1.93v6.38h-1.93v-3.66l-1.92 2.35-1.92-2.35v3.66H4.89m12.01 0l-2.9-3.1h1.94V8.81h1.92v3.28h1.93l-2.89 3.1" />
  </svg>
);
const JsIcon = () => (
  <svg viewBox="0 0 24 24" fill="rgb(255, 202, 40)" height="1em" width="1em">
    <path d="M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566L27.301 3.42H4.697zm8.528 5.975l-.409 4.441 9.671.001-.069.76-.665 7.45-.042.478-5.804 1.609-5.796-1.609-.396-4.443h2.84l.202 2.257 3.154.85 3.156-.852.328-3.67-9.671-.001.069-.76.665-7.45.209-2.086h11.287l.131 1.598.403 4.453h-2.841l-.262-2.922-2.889-.174h-.515V9.32l-2.755.074z" />
  </svg>
);

export const MenuItems = [
  {
    title: "Home.jsx",
    icon: <ExploreIcon />,
    link: "/",
    MainIcon: <ReactIcon />,
  },
  {
    title: "About.md",
    icon: <GitIcon />,
    link: "/about",
    MainIcon: <MdIcon />,
  },
  {
    title: "Contact.json",
    icon: <ContactIcon />,
    link: "/contact",
    MainIcon: <JsonIcon />,
  },
  {
    title: "Projects.js",
    icon: <ProjectIcon />,
    link: "/projects",
    MainIcon: <JsIcon />,
  },
  {
    title: "settings",
    icon: <SettingsIcon />,
    link: "/settings",
    sideNav: true,
  },
];
const PageList = () => {
  const pathname = usePathname();
  return (
    <div className="flex explorer overflow-x-auto">
      {MenuItems.map((item, index) => (
        <div
          key={index}
          className={` w-[180px] h-[48px] flex justify-center items-center px-5 text-sm cursor-pointer
          
          ${item.sideNav ? "hidden" : ""}
          ${
            pathname === item.link
              ? "active_border_line_top body_color"
              : " border-black border"
          }`}>
          <Button pathname={pathname} item={item} stroke={false} />
        </div>
      ))}
    </div>
  );
};

export default PageList;
