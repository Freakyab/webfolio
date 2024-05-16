import Link from "next/link";

const Button = ({ pathname, item, stroke } : buttonsProps) => {
  return (
    <>
      <Link href={item.link} key={item.link}
      >
        <div
          key={item.title}
          className={`flex text-white items-center gap-2 p-2 
         ${item.sideNav ? "hidden" : ""}
        ${pathname === item.link ? `body_color` : ""}
        `}>
          {item.MainIcon}
          {item.title}
        </div>
      </Link>
    </>
  );
};

export default Button;