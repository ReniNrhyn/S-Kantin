"use client";

import React from "react";

const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`bg-green-600 text-white py-2 px-4 rounded ${className}`}
      onClick={onClick} // Tambahkan event handler
    >
      {text}
    </button>
  );
};

export default Button;
