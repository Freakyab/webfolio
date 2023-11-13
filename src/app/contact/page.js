import PageList from "../components/pagesList";

export default function Contact() {
  return (
    <main className="body_color w-[100vw] calc_height text-white">
      <PageList />
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Contacts
      </h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        <pre
          className="p-4 flex gap-12 code-block"
          style={{ fontSize: "1.5rem" }}>
          <code>
            <p
              className="text-center text-2xl font-bold text-green-300 "
            >
              {"//"}Connect with me on social media
            </p>
            1| {`{`}
            {"\n"}
            2| &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="active-text">"SocialMedia"</span>: {"["} {"\n"}
            3| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>"Instagram" </span>: "link", {"\n"}
            4| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>"Twitter" </span>: "link", {"\n"}
            5| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>"Facebook" </span>: "link", {"\n"}
            6| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>"LinkedIn" </span>: "link", {"\n"}
            7| &nbsp;&nbsp;&nbsp;&nbsp;
            {"]"}
            {"\n"}
            8| {`}`}
          </code>
        </pre>
        <div className="flex gap-5 items-center">
          <div className="w-2 h-full active-component-line"></div>
          <div className="flex flex-col items-center justify-center">
            <form className="w-full max-w-md">
              <div className="mb-4">
                <p
                  className="text-center text-2xl font-bold text-green-300 mt-2 py-2 "
                >Message me here
                 </p>
                <label htmlFor="name" className="text-gray-400 mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 text-black rounded-md code-input"
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
                  className="w-full p-2 text-black rounded-md code-input"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="text-gray-400 mb-2 block">
                  Review or Suggestion
                </label>
                <textarea
                  id="review"
                  className="w-full h-32 p-2 text-black rounded-md code-input"
                  placeholder="Write your review or suggestion here..."></textarea>
              </div>
              <button className="w-full p-2 text-white bg-black rounded-md hover:bg-gray-700">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
