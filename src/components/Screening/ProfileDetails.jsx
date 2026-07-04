import React from "react";
import { Briefcase, GraduationCap, Wrench } from "lucide-react";

export default function ProfileDetails({ activeApplicant }) {
  return (
    <div className="flex-1 overflow-y-auto p-10 pb-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Professional Experience */}
        <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="bg-[#0A192F]/5 p-2 rounded-md">
              <Briefcase className="w-5 h-5 text-[#0A192F]" />
            </div>
            <h3 className="text-lg font-bold text-[#0A192F]">Experience</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wider">Summary</p>
              <p className="text-lg font-medium text-slate-800">
                {activeApplicant.experience}
              </p>
            </div>
          </div>
        </div>

        {/* Education Profile */}
        <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="bg-[#0A192F]/5 p-2 rounded-md">
              <GraduationCap className="w-5 h-5 text-[#0A192F]" />
            </div>
            <h3 className="text-lg font-bold text-[#0A192F]">Education</h3>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wider">Degree</p>
              <p className="text-lg font-medium text-slate-800">{activeApplicant.education}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-1 uppercase tracking-wider">Institution</p>
              <p className="text-base font-medium text-slate-600">{activeApplicant.university}</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="bg-cyan-50 p-2 rounded-md">
              <Wrench className="w-5 h-5 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-[#0A192F]">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {activeApplicant.skills.map(skill => (
              <span key={skill} className="inline-flex items-center rounded-md bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0A192F] shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}