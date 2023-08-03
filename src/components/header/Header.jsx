import { FaBars } from "react-icons/fa";
import Button from "../button/Button";
const Header = () => {
  return (
    <header className="flex p-5 justify-between items-center text-white fixed z-10 w-full">
      <div>
        <h1>User</h1>
      </div>

      <div className="hidden md:flex items-center gap-10 text-lg 2xl:text-2xl">
        <ul className="flex gap-5 font-mono">
          <li className="hover:text-cyan-500 hover:bg-cyan-600/5 cursor-pointer">
            <a href="">Home</a>
          </li>
          <li className="hover:text-cyan-500 hover:bg-cyan-600/5 cursor-pointer">
            <a>About</a>
          </li>
          <li className="hover:text-cyan-500 hover:bg-cyan-600/5 cursor-pointer">
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="flex font-mono">
          <li className="hover:text-slate-200 cursor-pointer">
            <Button text="Log In" />
          </li>
        </ul>
      </div>
      <FaBars className="md:hidden text-2xl cursor-pointer hover:text-cyan-500" />
    </header>
  );
};

export default Header;
