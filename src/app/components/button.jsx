import Link from "next/link";

const Button = ({ pathname, item, key, stroke }) => {
  return (
    <>
      <Link href={item.link}>
        <div
          key={item.title}
          className={`flex items-center gap-2 p-2 
        ${item.sideNav ? "hidden" : ""}
        ${pathname === item.link ? `${stroke ? "border body_color " : ""}` : ""}
        `}>
          {item.MainIcon}
          {item.title}
        </div>
      </Link>
    </>
  );
};

export default Button;
