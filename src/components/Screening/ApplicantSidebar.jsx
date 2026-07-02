import React from "react";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Tambahkan currentJob di parameter
export default function ApplicantSidebar({ applicants, activeId, setActiveId, currentJob }) {
  return (
    <aside className="w-[30%] min-w-[340px] max-w-[420px] bg-white border-r border-slate-200 flex flex-col z-10 shadow-sm">
      <div className="p-6 border-b border-slate-100 bg-[#0A192F]">
        <Link to="/jobs" className="flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 mb-5 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Job Postings
        </Link>
        <div>
          {/* Gunakan currentJob.title agar teksnya dinamis */}
          <h2 className="text-2xl font-bold text-white tracking-tight">{currentJob?.title}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold px-2 py-1 rounded-md">
              Active
            </span>
            <p className="text-sm font-medium text-slate-300">{applicants.length} Candidates</p>
          </div>
        </div>
      </div>
{/* Applicant List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-slate-50/50">
        <div className="px-2 pb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Queue</div>
        {applicants.map((app) => {
          const isActive = app.id === activeId;
          return (
            <button
              key={app.id}
              onClick={() => setActiveId(app.id)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group flex items-center justify-between ${
                isActive 
                  ? "bg-white border-cyan-500 shadow-md ring-1 ring-cyan-500/20" 
                  : "bg-white border-transparent hover:border-slate-300 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isActive ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-500'}`}>
                  {app.name.charAt(0)}
                </div>
                <div>
                  <div className={`font-semibold text-[15px] mb-0.5 ${isActive ? 'text-[#0A192F]' : 'text-slate-800 group-hover:text-[#0A192F]'}`}>
                    {app.name}
                  </div>
                  <div className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {app.appliedDate}
                  </div>
                </div>
              </div>
              {isActive && <ChevronRight className="w-5 h-5 text-cyan-500" />}
            </button>
          );
        })}
      </div>
    </aside>
  );
}