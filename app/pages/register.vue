<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Password tidak cocok!");
    return;
  }
  alert(`Registrasi berhasil untuk: ${name.value}`);
};
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-24 pb-12">
    <div
      class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-yellow-500/40">
      <div class="text-center mb-8">
        <img src="/images/icon.png" alt="Logo" class="h-16 mx-auto mb-3" />
        <h1 class="text-3xl font-bold text-yellow-500">Buat Akun Baru</h1>
        <p class="text-gray-300 mt-1">Mulai perjalanan spiritual bersama kami</p>
      </div>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="block text-sm font-medium mb-1 text-gray-200">Nama Lengkap</label>
          <div class="relative">
            <Icon icon="mdi:account-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
            <input v-model="name" type="text" placeholder="Nama Lengkap"
              class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1 text-gray-200">Email</label>
          <div class="relative">
            <Icon icon="mdi:email-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
            <input v-model="email" type="email" placeholder="you@example.com"
              class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1 text-gray-200">Nomor Telepon</label>
          <div class="relative">
            <Icon icon="mdi:phone-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
            <input v-model="phone" type="text" placeholder="+62 ..."
              class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-gray-200">Password</label>
            <div class="relative">
              <Icon icon="mdi:lock-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
              <input v-model="password" type="password" placeholder="••••••••"
                class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-gray-200">Konfirmasi</label>
            <div class="relative">
              <Icon icon="mdi:lock-check-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
              <input v-model="confirmPassword" type="password" placeholder="••••••••"
                class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                required />
            </div>
          </div>
        </div>

        <button type="submit"
          class="w-full py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2">
          <Icon icon="mdi:account-plus" class="w-5 h-5" /> Daftar Sekarang
        </button>

        <p class="text-center text-sm text-gray-400 mt-4">
          Sudah punya akun?
          <NuxtLink to="/login" class="text-yellow-500 hover:underline">Masuk di sini</NuxtLink>
        </p>
      </form>
    </div>
  </section>
</template>
