import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🏝️ PULAU 1: useEffect (Jalan otomatis pas aplikasi pertama kali dimuat)
  useEffect(() => {
    const savedUser = localStorage.getItem('token');
    if (savedUser) {
      // Kalau token ketemu di localStorage, anggap user sudah login
      setUser({ token: savedUser });
    }
    setLoading(false);
  }, []);

  // 🏝️ PULAU 2 & 3: Fungsi Login yang nembak API
  const loginAction = async (email, password) => {
    try {
      const response = await fetch('https://api.prohireindonesia.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (response.ok) {
        // Simpan token ke state dan localStorage biar kalau di-refresh ga ilang
        setUser(data.user);
        localStorage.setItem('token', data.token); 
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Login gagal' };
      }
    } catch (error) {
      return { success: false, message: 'Koneksi ke server error' };
    }
  };

  // Kembalikan variabel & fungsi yang mau dipakai di komponen UI
  return { user, loading, loginAction };
}