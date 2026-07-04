import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job, onReviewClick }) {
  return (
    <div className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
            {job.department}
          </span>
          {job.isNew && (
            <span className="text-xs font-bold bg-rose-500 text-white px-2 py-0.5 rounded">NEW</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">{job.title}</h3>
        <p className="text-sm text-slate-400 mb-4">{job.location} • {job.date}</p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <span className="text-sm text-slate-500 font-medium">
          {job.applicants} Total
        </span>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onReviewClick(job)}
            className="text-sm font-semibold text-slate-400 hover:text-slate-700 transition-colors px-2 py-1.5"
          >
            Preview
          </button>
          <Link 
            to={`/screening/${job.id}`}
            className="text-sm font-bold text-violet-600 hover:text-violet-800 bg-violet-50 hover:bg-violet-100 px-4 py-1.5 rounded-lg transition-colors"
          >
            Screening →
          </Link>
        </div>
      </div>
    </div>
  );
}