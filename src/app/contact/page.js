import PageList from "../components/pagesList";
import Link from "next/link";

export default function Contact() {
  const handlers = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/aryan-bhisikar-843512261/",
      title: "Aryan Bhisikar",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/aryan_bhisikar/?hl=en",
      title: "@aryan_bhisikar",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/AryanBhisikar",
      title: "@AryanBhisikar",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/aryan.kohli.14855/",
      title: "Aryan Bhisikar",
    },
    {
      name: "Github",
      link: "https://github.com/Freakyab",
      title: "Freakyab",
    }
  ];

  return (
    <main className="body_color w-full  calc_height text-white">
      <PageList />

      <div className="grid grid-cols-3 mt-5 ">
        <pre className="p-4 col-span-2 " style={{ fontSize: "1.5rem" }}>
          <code>
            <p className="text-center text-2xl font-bold text-gray-400 ">
              {"//"}Connect with me on social media
            </p>
            1| {`{`}
            {"\n"}
            2| &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="active-text">"SocialMedia"</span>: {"["} {"\n"}
            {handlers.map((handler, index) => (
              <span key={index}>
                {index + 3}| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>"{handler.name}"</span>:{" "}
                <span className="active-text">
                  <Link
                    href={handler.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    "{handler.title}"
                  </Link>
                </span>
                {index === handlers.length - 1 ? "" : ","}
                {"\n"}
              </span>
            ))}
            7| &nbsp;&nbsp;&nbsp;&nbsp;
            {"]"}
            {"\n"}
            8| {`}`}
          </code>
        </pre>
        <div className="flex gap-7 py-5 items-center">
          <div className="w-[1px] h-full active-component-line"></div>
          <div className="flex flex-col items-center justify-center">
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-400 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 text-black rounded-md explorer"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-400 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 text-black rounded-md explorer"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="text-gray-400 mb-2 block">
                  Review or Suggestion
                </label>
                <textarea
                  id="review"
                  className="w-full h-32 p-2 text-black rounded-md explorer"
                  placeholder="Write your review or suggestion here..."></textarea>
              </div>
              <button className="w-full p-2 text-white bg-black rounded-md ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
