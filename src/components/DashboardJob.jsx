import React, { useState } from "react";
import { initialJobs, dummyApplicants } from "../data/jobData"; 

export default function DashboardJob() {
  // Menggunakan state agar kartu lowongan baru bisa bertambah secara langsung
  const [jobs, setJobs] = useState(initialJobs);
  
  // State untuk Modal Review Pelamar
  const [selectedJob, setSelectedJob] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // State untuk Modal Form Input Lowongan
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "Engineering",
    location: "Remote",
  });

  // Fungsi saat tombol Review diklik
  const handleReviewClick = (job) => {
    setSelectedJob(job);
    setIsReviewModalOpen(true);
  };

  // Fungsi untuk menambah postingan lowongan baru
  const handlePostJob = (e) => {
    e.preventDefault();
    
    const newEntry = {
      id: jobs.length + 1,
      title: formData.title,
      department: formData.department,
      location: formData.location,
      date: "Just Now",
      applicants: 0,
      isNew: true 
    };

    setJobs([newEntry, ...jobs]);
    setIsFormOpen(false);
    setFormData({ title: "", department: "Engineering", location: "Remote" });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Active Job Postings</h1>
          <p className="text-slate-500">Manage and screen applicants for your open roles.</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-all"
        >
          + New Posting
        </button>
      </div>

      {/* Grid Kartu Lowongan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
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

            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
              <span className="text-sm text-slate-500 font-medium">{job.applicants} Total</span>
              <button 
                onClick={() => handleReviewClick(job)}
                className="text-sm font-semibold text-violet-600 hover:text-violet-800 flex items-center gap-1"
              >
                Review →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL FORMULIR NEW POSTING --- */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Create New Job</h2>
            
            <form onSubmit={handlePostJob} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Job Title</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  placeholder="e.g. Senior Developer"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Department</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Design">Design</option>
                  <option value="Product">Product Management</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site (Jakarta)</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-3 bg-teal-500 text-white rounded-xl font-bold hover:bg-teal-600 shadow-lg shadow-teal-200 transition-all"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL REVIEW PELAMAR (FIXED: DENGAN HEADER DAN TOMBOL ✕ TETAP DI ATAS) --- */}
      {isReviewModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[85vh]">
            
            {/* Bagian Header Modal - Dikunci di atas agar tombol silang tidak hilang */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800">Applicants List</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedJob.title}</p>
              </div>
              <button 
                onClick={() => setIsReviewModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 font-bold text-xl p-1 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Bagian Konten List Pelamar dengan Scroll internal agar tidak merusak modal */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {dummyApplicants.filter(a => a.jobId === selectedJob.id).length > 0 ? (
                dummyApplicants
                  .filter((a) => a.jobId === selectedJob.id)
                  .map((applicant) => (
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

            {/* Bagian Footer Modal */}
            <div className="border-t border-slate-100 pt-4 mt-4 flex justify-end">
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}