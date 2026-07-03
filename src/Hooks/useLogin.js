// src/hooks/useLogin.js
import { useState } from "react";
import apiClient from "../lib/apiClient"; // Import kurir bohongan tadi

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const loginAction = async (email, password) => {
    setIsLoading(true);
    try {
      // Panggil apiClient mirip banget sama kodingan aslinya nanti
      const response = await apiClient.post("/login", { email, password });
      
      // Simpan token ke localStorage biar awet pas di-refresh
      localStorage.setItem("token", response.data.token);
      
      return { success: true };
    } catch (error) {
      // Tangkap pesan error dari apiClient bohongan tadi
      return { 
        success: false, 
        message: error.response?.data?.message || "Terjadi kesalahan sistem" 
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { loginAction, isLoading };
}