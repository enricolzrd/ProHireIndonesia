// src/data/jobData.js

// 1. DATA KARTU LOWONGAN UTAMA (Milik Kelompok)
export const initialJobs = [
  {
    id: 1,
    title: "Data Sains",
    department: "Data Science",
    location: "Remote",
    date: "Posted: Jun 20, 2026",
    applicants: 0, // 0 Pelamar
    isNew: false,
  },
  {
    id: 2,
    title: "Data Engineer",
    department: "Data Science",
    location: "Remote",
    date: "Posted: Oct 24, 2026",
    applicants: 12, // 12 Pelamar (Dicocokkan dengan data di bawah)
    isNew: true,
  },
  {
    id: 3,
    title: "Senior Product Designer",
    department: "Design",
    location: "New York, NY",
    date: "Posted: Oct 22, 2026",
    applicants: 0, // 0 Pelamar
    isNew: false,
  },
  {
    id: 4,
    title: "Frontend Developer (React)",
    department: "Engineering",
    location: "San Francisco, CA",
    date: "Posted: Oct 20, 2026",
    applicants: 28, // 28 Pelamar (Dicocokkan dengan data di bawah)
    isNew: false,
  },
];

// 2. DATA PELAMAR TIRUAN (Disesuaikan dengan ID Lowongan)
export const dummyApplicants = [
  // === PELAMAR UNTUK DATA ENGINEER (jobId: 2) -> Total 12 Orang ===
  { id: 1, jobId: 2, name: "Budi Santoso", email: "budi.santoso@email.com", status: "Shortlisted" },
  { id: 2, jobId: 2, name: "Siti Rahma", email: "siti.rahma@email.com", status: "Pending" },
  { id: 3, jobId: 2, name: "Andi Wijaya", email: "andi.wijaya@email.com", status: "Rejected" },
  { id: 4, jobId: 2, name: "Dewi Lestari", email: "dewi.lestari@email.com", status: "Shortlisted" },
  { id: 5, jobId: 2, name: "Rian Hidayat", email: "rian.hidayat@email.com", status: "Pending" },
  { id: 6, jobId: 2, name: "Eka Putri", email: "eka.putri@email.com", status: "Shortlisted" },
  { id: 7, jobId: 2, name: "Fajar Nugraha", email: "fajar.nugraha@email.com", status: "Pending" },
  { id: 8, jobId: 2, name: "Gita Permata", email: "gita.permata@email.com", status: "Rejected" },
  { id: 9, jobId: 2, name: "Hendra Wijaya", email: "hendra.w@email.com", status: "Pending" },
  { id: 10, jobId: 2, name: "Indah Sari", email: "indah.sari@email.com", status: "Shortlisted" },
  { id: 11, jobId: 2, name: "Joko Susilo", email: "joko.susilo@email.com", status: "Pending" },
  { id: 12, jobId: 2, name: "Kurniawati", email: "kurniawati@email.com", status: "Shortlisted" },

  // === PELAMAR UNTUK FRONTEND DEVELOPER (jobId: 4) -> Total 28 Orang ===
  { id: 13, jobId: 4, name: "Aditya Pratama", email: "aditya@email.com", status: "Shortlisted" },
  { id: 14, jobId: 4, name: "Bella Citra", email: "bella.c@email.com", status: "Pending" },
  { id: 15, jobId: 4, name: "Chandra Malik", email: "chandra.m@email.com", status: "Rejected" },
  { id: 16, jobId: 4, name: "Dina Mariana", email: "dina.m@email.com", status: "Shortlisted" },
  { id: 17, jobId: 4, name: "Feri Setiawan", email: "feri.s@email.com", status: "Pending" },
  { id: 18, jobId: 4, name: "Grace Natalia", email: "grace.n@email.com", status: "Shortlisted" },
  { id: 19, jobId: 4, name: "Hafiz Anwar", email: "hafiz.a@email.com", status: "Pending" },
  { id: 20, jobId: 4, name: "Irma Yunita", email: "irma.y@email.com", status: "Rejected" },
  { id: 21, jobId: 4, name: "Kevin Sanjaya", email: "kevin.s@email.com", status: "Shortlisted" },
  { id: 22, jobId: 4, name: "Larasati", email: "larasati@email.com", status: "Pending" },
  { id: 23, jobId: 4, name: "Muhammad Rizky", email: "rizky.m@email.com", status: "Shortlisted" },
  { id: 24, jobId: 4, name: "Nadia Utami", email: "nadia.u@email.com", status: "Pending" },
  { id: 25, jobId: 4, name: "Oki Setiawan", email: "oki.s@email.com", status: "Rejected" },
  { id: 26, jobId: 4, name: "Putri Handayani", email: "putri.h@email.com", status: "Shortlisted" },
  { id: 27, jobId: 4, name: "Rendra Amin", email: "rendra@email.com", status: "Pending" },
  { id: 28, jobId: 4, name: "Sania Mirza", email: "sania.m@email.com", status: "Shortlisted" },
  { id: 29, jobId: 4, name: "Taufik Hidayat", email: "taufik.h@email.com", status: "Pending" },
  { id: 30, jobId: 4, name: "Vina Pandu", email: "vina.p@email.com", status: "Rejected" },
  { id: 31, jobId: 4, name: "Wahyu Hidayat", email: "wahyu@email.com", status: "Shortlisted" },
  { id: 32, jobId: 4, name: "Yayan Ruhian", email: "yayan@email.com", status: "Pending" },
  { id: 33, jobId: 4, name: "Zaskia Mecca", email: "zaskia@email.com", status: "Shortlisted" },
  { id: 34, jobId: 4, name: "Albert Einstein", email: "albert@email.com", status: "Pending" },
  { id: 35, jobId: 4, name: "Nikola Tesla", email: "tesla@email.com", status: "Shortlisted" },
  { id: 36, jobId: 4, name: "Marie Curie", email: "marie@email.com", status: "Shortlisted" },
  { id: 37, jobId: 4, name: "Isaac Newton", email: "isaac@email.com", status: "Pending" },
  { id: 38, jobId: 4, name: "Alan Turing", email: "turing@email.com", status: "Shortlisted" },
  { id: 39, jobId: 4, name: "Charles Darwin", email: "darwin@email.com", status: "Rejected" },
  { id: 40, jobId: 4, name: "Ada Lovelace", email: "ada@email.com", status: "Shortlisted" },
];