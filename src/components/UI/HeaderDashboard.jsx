import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-3 px-6 md:px-8 flex justify-between items-center shadow-sm z-50 sticky top-0">
      
      {/* KIRI: Logo & Search Bar */}
      <div className="flex items-center gap-6 lg:gap-10 flex-1">
        
        {/* Logo */}
        <Link to="/jobs" className="text-xl md:text-2xl font-black text-violet-700 tracking-tight flex items-center gap-2 shrink-0">
          <span className="text-cyan-500 text-3xl leading-none"></span>
          ProHireIndonesia
        </Link>

        {/* Search Bar (Tersembunyi di layar HP, muncul di tablet/desktop) */}
        <div className="hidden md:flex relative group max-w-md w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-violet-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search jobs, candidates..." 
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50/80 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-slate-400 text-slate-700 font-medium"
          />
        </div>

      </div>

      {/* KANAN: Notifikasi & Profil */}
      <div className="flex items-center gap-3 md:gap-5 shrink-0">
        
        {/* Ikon Notifikasi dengan Red Dot */}
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Profil User */}
        <button className="flex items-center gap-3 pl-2 md:pl-5 md:border-l border-slate-200">
          {/* Avatar Inisial */}
          <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center border border-violet-200 text-sm shadow-sm">
            EL
          </div>
          {/* Nama & Role (Hanya muncul di desktop) */}
          <div className="hidden lg:block text-left">
            <p className="text-sm font-bold text-slate-700 leading-tight">Enrico Lazuardi</p>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">Data Scientist</p>
          </div>
        </button>

      </div>
    </header>
  );
}