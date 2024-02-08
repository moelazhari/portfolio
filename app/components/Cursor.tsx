"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Cursor = () => {

    const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({ x: 0, y: 0 });
    const [cursorAnimate, setCursorAnimate] = useState<string>("default");
  
    useEffect(() => {
      const handleMouseMove = (e: any) => {
          setMousePosition({
              x: e.clientX,
              y: e.clientY
          });
      }
      window.addEventListener('mousemove', handleMouseMove);
  
      const handleButtonHover = () => {
        setCursorAnimate('hover');
      };
  
      const handleButtonLeave = () => {
        setCursorAnimate('default');
      };
  
      const buttons = document.querySelectorAll('li, button');
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', handleButtonHover);
        button.addEventListener('mouseleave', handleButtonLeave);
      });
  
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          buttons.forEach((button) => {
            button.removeEventListener('mouseenter', handleButtonHover);
            button.removeEventListener('mouseleave', handleButtonLeave);
          });
      }
  
    }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      opacity: 0,
    }
  }

  return (
    <motion.div variants={variants} animate={cursorAnimate} className="cursor bg-content w-6 h-6 fixed top-0 left-0 rounded-full transition-opacity duration-500  -z-10"></motion.div>
  )
}

export default Cursor;