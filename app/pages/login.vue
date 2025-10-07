<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

const handleLogin = () => {
  alert(`Login dengan email: ${email.value}`);
};
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
    <div
      class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-yellow-500/40">
      <div class="text-center mb-8">
        <img src="/images/icon.png" alt="Logo" class="h-16 mx-auto mb-3" />
        <h1 class="text-3xl font-bold text-yellow-500">Welcome Back</h1>
        <p class="text-gray-300 mt-1">Masuk untuk melanjutkan perjalanan ibadah Anda</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
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
          <label class="block text-sm font-medium mb-1 text-gray-200">Password</label>
          <div class="relative">
            <Icon icon="mdi:lock-outline" class="absolute left-3 top-3 text-yellow-500 w-5 h-5" />
            <input v-model="password" type="password" placeholder="••••••••"
              class="w-full pl-10 pr-3 py-2 rounded-lg bg-black/50 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required />
          </div>
        </div>

        <div class="flex items-center justify-between text-sm text-gray-300">
          <label class="flex items-center gap-2">
            <input v-model="remember" type="checkbox" class="accent-yellow-500" />
            Ingat saya
          </label>
          <NuxtLink to="/forgot-password" class="text-yellow-500 hover:underline">
            Lupa password?
          </NuxtLink>
        </div>

        <button type="submit"
          class="w-full py-2.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition flex items-center justify-center gap-2">
          <Icon icon="mdi:login" class="w-5 h-5" /> Masuk
        </button>

        <p class="text-center text-sm text-gray-400 mt-4">
          Belum punya akun?
          <NuxtLink to="/register" class="text-yellow-500 hover:underline">Daftar Sekarang</NuxtLink>
        </p>
      </form>
    </div>
  </section>
</template>
