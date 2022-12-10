import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-purple-400 to-teal-400 text-2xl font-semibold p-2 text-center">
      {new Date().getFullYear()}
    </footer>
  );
};
