import React from "react";
// Import Link dari react-router-dom untuk navigasi halaman secara instan
import { Link } from "react-router-dom";

const Header = ({ onLogin }) => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      {/* Logo diklik akan kembali ke halaman utama (landing page) */}
      <Link to="/" className="text-xl font-extrabold tracking-tight text-indigo-700 hover:opacity-90">
        ProHireIndonesia
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {/* Navigasi internal landing page menggunakan anchor tag (#) */}
        <a
          href="#home"
          className="font-medium text-gray-600 transition-colors hover:text-indigo-600"
        >
          Home
        </a>

        <a
          href="#about"
          className="font-medium text-gray-600 transition-colors hover:text-indigo-600"
        >
          About
        </a>

        <a
          href="#contact"
          className="font-medium text-gray-600 transition-colors hover:text-indigo-600"
        >
          Contact
        </a>

      </nav>

      <div className="flex gap-2">
        <button
          onClick={onLogin}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:bg-gray-100"
        >
          Login
        </button>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 active:bg-indigo-800"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;