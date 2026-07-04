import React from "react";
import { User, Mail, Phone, MapPin, FileText, ExternalLink } from "lucide-react";

export default function ProfileHeader({ activeApplicant }) {
  return (
    <div className="bg-white px-10 py-8 border-b border-slate-200 shrink-0">
      <div className="max-w-5xl mx-auto flex items-start justify-between">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
            <User className="w-8 h-8 text-slate-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#0A192F] tracking-tight mb-2">
              {activeApplicant.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> {activeApplicant.email}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> {activeApplicant.phone}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {activeApplicant.location}</span>
            </div>
          </div>
        </div>
        
        <button className="flex items-center justify-center px-5 py-2.5 bg-white border border-slate-300 hover:border-[#0A192F] text-slate-700 font-semibold rounded-lg transition-colors gap-2 text-sm shadow-sm">
          <FileText className="w-4 h-4 text-slate-500" />
          View Original CV
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </button>
      </div>
    </div>
  );
}