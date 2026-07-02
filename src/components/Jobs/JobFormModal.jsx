import React from "react";

export default function JobFormModal({ isOpen, onClose, formData, setFormData, onSubmit }) {
  if (!isOpen) return null; // Jika tidak open, jangan render apa-apa

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Create New Job</h2>
        
        <form onSubmit={onSubmit} className="space-y-5">
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
              onClick={onClose}
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
  );
}