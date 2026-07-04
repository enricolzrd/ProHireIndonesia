import React from "react";

export default function ReviewModal({ isOpen, onClose, selectedJob, applicants }) {
  if (!isOpen || !selectedJob) return null;

  const jobApplicants = applicants.filter((a) => a.jobId === selectedJob.id);

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]">
        
        <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Applicants List</h3>
            <p className="text-xs text-slate-400 mt-0.5">{selectedJob.title}</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 font-bold text-xl p-1 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {jobApplicants.length > 0 ? (
            jobApplicants.map((applicant) => (
              <div key={applicant.id} className="p-3 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100/80">
                <div>
                  <h4 className="font-semibold text-sm text-slate-700">{applicant.name}</h4>
                  <p className="text-xs text-slate-400">{applicant.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-md font-bold ${
                  applicant.status === 'Shortlisted' ? 'bg-green-50 text-green-600' :
                  applicant.status === 'Rejected' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {applicant.status}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-400 text-sm">
              No applicants for this position yet.
            </div>
          )}
        </div>

        <div className="border-t border-slate-100 pt-4 mt-4 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}