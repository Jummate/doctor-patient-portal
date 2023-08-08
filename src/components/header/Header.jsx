import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../button/Button";
import Menu from "../menu/Menu";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="p-5 text-white fixed z-10 w-full">
      <nav className="flex justify-between items-center">
        <h1>User</h1>
        <FaBars
          className="md:hidden text-2xl cursor-pointer hover:text-cyan-500"
          onClick={() => setOpenMenu(true)}
        />

        <div className="hidden md:flex items-center gap-10 text-lg 2xl:text-2xl">
          <ul className="flex gap-5 font-mono">
            <li className="hover:text-cyan-500 hover:bg-cyan-600/5 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-cyan-500 hover:bg-cyan-600/5 cursor-pointer">
              <Link
                smooth
                to="/#about"
              >
                About
              </Link>
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
      </nav>

      {openMenu ? <Menu onClick={() => setOpenMenu(false)} /> : null}
    </header>
  );
};

export default Header;
