import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useContactStore = defineStore("contact", {
  state: () => ({
    loading: false,
    success: false,
    error: null,
  }),

  actions: {
    async fetchCsrfCookie(baseURL) {
      try {
        await $fetch("/sanctum/csrf-cookie", {
          baseURL,
          method: "GET",
          credentials: "include",
        });
        console.log("✅ CSRF Cookie berhasil diambil.");
      } catch (e) {
        console.error("❌ Gagal mengambil CSRF cookie:", e);
        throw new Error(
          "Gagal menginisialisasi keamanan. Silakan cek koneksi."
        );
      }
    },

    async sendMessage(payload) {
      const config = useRuntimeConfig();
      const baseURL = config.public.apiBaseUrl;

      this.loading = true;
      this.success = false;
      this.error = null;

      try {
        // Ambil CSRF cookie
        await this.fetchCsrfCookie(baseURL);

        // Ambil token dari cookie browser
        const token = useCookie("XSRF-TOKEN").value;

        // Kirim POST request dengan token
        const res = await $fetch("/admin/travel/contact/send", {
          baseURL,
          method: "POST",
          body: payload,
          credentials: "include", // kirim cookie session
          headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": token, // 🔥 kirim token ke Laravel
          },
        });

        this.success = true;
        return res;
      } catch (err) {
        console.error("❌ Gagal kirim pesan:", err);

        if (err?.response?._data) {
          // Jika Laravel mengirim pesan error dari validasi
          this.error = err.response._data;
        } else {
          this.error = {
            message: err.message || "Terjadi kesalahan.",
            errors: {},
          };
        }

        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
