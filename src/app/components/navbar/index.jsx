const Navbar = () => {
  return (
    <div className="navbar">
      <div className="text-white flex w-screen h-[45px] items-center">
        <img
          src="/assets/logo.jpeg"
          alt="Logo"
          width="25"
          height="25"
          className="m-2.5"
        />
        <ul className="flex m-2.5 gap-2.5">
          <li>File</li>
          <li>Edit</li>
          <li>Run</li>
          <li>Go</li>
        </ul>
        <div className="ml-auto mr-auto  shadow-lg">
          <p className="text-white hidden-tab bg-gray-700 px-10 rounded py-1 w-96 text-center text-xs font-light">Freakyab-webfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
