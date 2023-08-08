import { FaTimes } from "react-icons/fa";

const Menu = ({ onClick }) => {
  return (
    <nav className=" md:hidden fixed z-10 flex flex-col items-center gap-10 w-full min-h-screen top-0 left-0 bg-cyan-900 pt-10">
      <div className="flex text-2xl">
        <FaTimes
          className="cursor-pointer text-4xl"
          onClick={onClick}
        />
      </div>
      {/* <div className="flex flex-col gap-2">
        <h3 className="scale-110 mb-2 font-bold">Main Menu</h3>
        <a
          href=""
          className=""
        >
          Home
        </a>
        <a
          href=""
          className=""
        >
          Log In
        </a>
        <a
          href=""
          className=""
        >
          Dashboard
        </a>
        <a
          href=""
          className=""
        >
          Log Out
        </a>
      </div> */}

      <div className="flex flex-col gap-7 font-bold">
        <a
          href=""
          className="transition ease-in duration-500 hover:scale-125"
        >
          Home
        </a>
        <a
          href=""
          className="transition ease-in duration-500 hover:scale-125"
        >
          About
        </a>
        <a
          href=""
          className="transition ease-in duration-500 hover:scale-125"
        >
          Contact
        </a>
        <a
          href=""
          className="transition ease-in duration-500 hover:scale-125"
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Menu;
