import React from "react";
import { Check, X } from "lucide-react";

// Terima currentIndex langsung dari props
export default function ActionBar({ currentIndex, totalApplicants }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-8 py-5 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="text-sm text-slate-500 font-medium">
          Reviewing candidate <span className="font-bold text-slate-800">{currentIndex}</span> of {totalApplicants}
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center px-8 py-3 bg-white border-2 border-rose-100 hover:border-rose-600 hover:bg-rose-50 text-rose-600 font-bold rounded-lg transition-all gap-2">
            <X className="w-5 h-5" strokeWidth={2.5} />
            <span>Decline</span>
          </button>
          
          <button className="flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm transition-all gap-2">
            <Check className="w-5 h-5" strokeWidth={2.5} />
            <span>Move to Interview</span>
          </button>
        </div>
      </div>
    </div>
  );
}