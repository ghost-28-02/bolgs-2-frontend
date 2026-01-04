import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-6 py-4 text-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 tracking-wide">
          CODEHELP BLOGS
        </h1>
      </div>
    </header>
  );
};

export default Header;