import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Infinity, Search, Bell, Menu } from "lucide-react";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-40 flex-shrink-0">
        <div className="h-full px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/app/jobs"
              className="flex items-center gap-2"
            >
              <Infinity className="w-7 h-7 text-indigo-600" />
              <span className="font-bold text-lg tracking-tight text-slate-900 hidden sm:block">
                ProHireIndonesia
              </span>
            </Link>

            <div className="hidden md:flex relative w-64 lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              

              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                placeholder="Search jobs, candidates..."
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 relative p-2">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzc5NTg4Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="md:hidden text-slate-600 p-1">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}