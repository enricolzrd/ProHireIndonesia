import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { initialJobs, dummyApplicants } from "../data/jobData";

// Import Komponen UI
import ApplicantSidebar from "../components/Screening/ApplicantSidebar";
import ProfileHeader from "../components/screening/ProfileHeader";
import ProfileDetails from "../components/screening/ProfileDetails";
import ActionBar from "../components/screening/ActionBar";

// Fungsi Bantuan: Menambahkan data palsu tambahan karena data di jobData.js terbatas
const enrichApplicantData = (applicant) => {
  if (!applicant) return null;
  return {
    ...applicant,
    university: "Universitas Teknologi Nusantara", 
    education: "Bachelor's Degree in Related Field",
    skills: ["Problem Solving", "Teamwork", "Analytical Thinking", "Communication"],
    experience: "1-3 Years Professional Experience",
    phone: "+62 812-XXXX-XXXX",
    location: "Jakarta, Indonesia",
    appliedDate: "Recently",
  };
};

export default function CVScreeningPage() {
  // 1. Ambil ID Job dari URL (misal: /screening/2 akan menghasilkan id = "2")
  const { id } = useParams();
  const jobId = parseInt(id);

  // 2. Cari data Job dan filter Pelamar khusus untuk Job ini saja
  const currentJob = initialJobs.find((job) => job.id === jobId);
  const jobApplicants = dummyApplicants.filter((app) => app.jobId === jobId);

  // 3. Set State untuk pelamar yang sedang dilihat (Otomatis pilih pelamar pertama jika ada)
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (jobApplicants.length > 0) {
      setActiveId(jobApplicants[0].id);
    }
  }, [jobId]);

  // Handle Jika Job ID tidak ditemukan di URL
  if (!currentJob) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F4F7F9]">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <Link to="/dashboard" className="text-cyan-600 underline font-semibold">Return to Dashboard</Link>
      </div>
    );
  }

  // Handle Jika Lowongan belum memiliki pelamar (Misal: Job ID 1 atau 3)
  if (jobApplicants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F4F7F9]">
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">No Applicants Yet</h2>
          <p className="text-slate-500 mb-6">There are no candidates to review for <b>{currentJob.title}</b>.</p>
          <Link to="/jobs" className="bg-[#0A192F] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // 4. Siapkan data pelamar yang sedang aktif untuk di-render ke UI
  const rawActiveApplicant = jobApplicants.find(a => a.id === activeId) || jobApplicants[0];
  const activeApplicant = enrichApplicantData(rawActiveApplicant);
  
  // Hitung urutan pelamar saat ini (misal: "Reviewing candidate 2 of 12")
  const currentIndex = jobApplicants.findIndex(a => a.id === activeId) + 1;

  return (
    <div className="flex h-screen w-full bg-[#F4F7F9] font-sans text-slate-800 overflow-hidden">
      
      {/* Lempar data currentJob ke Sidebar agar judulnya dinamis */}
      <ApplicantSidebar 
        applicants={jobApplicants} 
        activeId={activeId} 
        setActiveId={setActiveId}
        currentJob={currentJob} 
      />

      {/* Right Main Area (70%) */}
      <main className="flex-1 flex flex-col relative bg-[#F4F7F9]">
        
        <ProfileHeader activeApplicant={activeApplicant} />
        
        <ProfileDetails activeApplicant={activeApplicant} />

        <ActionBar 
          currentIndex={currentIndex} 
          totalApplicants={jobApplicants.length} 
        />

      </main>
    </div>
  );
}