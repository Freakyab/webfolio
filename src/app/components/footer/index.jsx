import Link from "next/link";

const GitIcon = () => (
  <svg
    width="14"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
  </svg>
);

const Footer = () => {
  return (
    <div className="h-[28px] w-screen navbar text-white px-2  justify-between font-thin text-sm pt-1 pl-4 flex items-center fixed bottom-0">
      <div className="flex ">
        <div className="pl-1 pr-3 hover:bg-gray-400 flex">
          <GitIcon />
          <Link href={"https://github.com/freakyab"} className="mx-1 ">
            main
          </Link>
        </div>
        <div class="flex hover:bg-gray-400 px-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 10"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="Bottombar_icon__zdqmH">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"></path>
          </svg>
          <p>0</p>&nbsp;&nbsp;
          <svg
            width="15"
            height="15"
            viewBox="0 0 30 5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="Bottombar_icon__zdqmH">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"></path>
          </svg>
          <p>0</p>
        </div>
      </div>
      <div className="flex ">
        <Link
          href={"https://github.com/freakyab"}
          className="hover:bg-gray-400 pr-2">
          Follow me{" "}
        </Link>
        <p className="mb-auto hover:bg-gray-400 pl-2 pl-2">Prettier</p>
      </div>
    </div>
  );
};

export default Footer;
