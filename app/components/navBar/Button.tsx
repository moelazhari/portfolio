import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = ({ children, onClick, className } : ButtonProps) => {
  return <button onClick={onClick} className={`p-4 ${className}`} > { children }</button>;
};

export default Button;
