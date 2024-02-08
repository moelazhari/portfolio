"use client";

// import Link from "next/link";
// import DarkModeButton from "./DrakMode";
import { use, useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import { useTheme } from 'next-themes'

const DropDown = () => {
    return (
        <div > </div>
    )
}

export const MenuDropdow = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
        <button className="md:hidden grid place-content-center mr-auto rounded-xl" 
          aria-label="menu"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X width={40}  height={50} strokeWidth={1.5} />
          ) : (
            <Menu width={40} height={50} strokeWidth={1.5} />
          )}
        </button>
      {isOpen && <DropDown />}
    </>
  );

}