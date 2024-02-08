import Link from "next/link";
import DarkModeButton from "./DrakMode";
import { MenuDropdow } from "./Menu";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center text-lg p-4">
      <MenuDropdow />
      <ul className="hidden md:flex gap-8 items-center">
        <li className="p-2 rounded-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 rounded-lg">
          <Link href="/about">About me</Link>
        </li>
        <li className="p-2 rounded-lg">
          <Link href="/projects"> Projects </Link>
        </li>
        <li className="p-2 rounded-lg">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <DarkModeButton />
        <a href="/cv_ElazhariMohamed.pdf" download="cv_ElazhariMohamed">
          <button className="relative px-6 py-2 group">
            <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-content group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-bkg border-2 border-content group-hover:bg-content transition-color duration-500 ease-in-out"></span>
            <span className="relative text-content group-hover:text-bkg">
              resume
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
