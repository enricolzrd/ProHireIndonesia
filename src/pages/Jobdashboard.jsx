import React, { useState, useEffect } from "react";
import { initialJobs, dummyApplicants } from "../data/jobData"; 

// Import komponen yang sudah dipisah
import JobCard from "../components/Jobs/JobCard";
import JobFormModal from "../components/Jobs/JobFormModal";
import ReviewModal from "../components/Jobs/ReviewModal";

export default function DashboardJob() {
  // 1. Modifikasi inisialisasi state untuk membaca Local Storage dulu
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("dashboardJobs");
    // Jika ada data di local storage, pakai data itu. Jika kosong, pakai initialJobs.
    return savedJobs ? JSON.parse(savedJobs) : initialJobs;
  });

  const [selectedJob, setSelectedJob] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "Engineering",
    location: "Remote",
  });

  // 2. Tambahkan useEffect untuk otomatis save ke Local Storage tiap kali 'jobs' berubah
  useEffect(() => {
    localStorage.setItem("dashboardJobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleReviewClick = (job) => {
    setSelectedJob(job);
    setIsReviewModalOpen(true);
  };

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
          <JobCard 
            key={job.id} 
            job={job} 
            onReviewClick={handleReviewClick} 
          />
        ))}
      </div>

      {/* Modals */}
      <JobFormModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        formData={formData}
        setFormData={setFormData}
        onSubmit={handlePostJob}
      />

      <ReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        selectedJob={selectedJob}
        applicants={dummyApplicants}
      />
    </div>
  );
}