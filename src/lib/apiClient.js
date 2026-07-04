// src/lib/apiClient.js

// 1. KITA IMPORT DATANYA DI PALING ATAS
import { mockUsers } from "../data/mockUsers";

const apiClient = {
  // 🎯 FUNGSI POST NYA TETAP DI SINI
  post: async (url, data) => {
    // Efek loading 1 detik tetap dipertahankan biar estetik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (url === "/login") {
      // 2. Fungsi POST sekarang tugasnya mencari ke file mockUsers
      const userFound = mockUsers.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (userFound) {
        return {
          data: {
            token: "mock-token-xyz-12345",
            user: { name: userFound.name, email: userFound.email, role: userFound.role }
          }
        };
      } else {
        throw {
          response: { data: { message: "Corporate Email atau Password salah ya bos!" } }
        };
      }
    }
  },

  // 🎯 FUNGSI GET NYA JUGA TETAP DI SINI
  get: async (url) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    if (url === "/features") {
      return { data: ["Feature 1", "Feature 2", "Feature 3"] };
    }
  }
};

export default apiClient;