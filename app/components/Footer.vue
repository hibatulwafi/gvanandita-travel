<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="bg-black text-white pt-16 pb-10 border-t border-yellow-500/30">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

      <!-- Brand -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <img src="/images/icon.png" alt="GVA Logo" class="h-10 w-auto" />
          <h2 class="text-xl font-bold tracking-wide text-yellow-500">GVA Travel</h2>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Menjadi sahabat perjalanan spiritual Anda menuju Tanah Suci.
          Kami berkomitmen memberikan layanan terbaik dengan sepenuh hati.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="hover:text-yellow-400 transition">
            <Icon icon="mdi:facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="hover:text-yellow-400 transition">
            <Icon icon="mdi:instagram" class="w-6 h-6" />
          </a>
          <a href="#" class="hover:text-yellow-400 transition">
            <Icon icon="mdi:youtube" class="w-6 h-6" />
          </a>
          <a href="#" class="hover:text-yellow-400 transition">
            <Icon icon="mdi:whatsapp" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-semibold text-yellow-500 mb-4 uppercase tracking-wide">
          Quick Links
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink to="/" class="hover:text-yellow-400 transition">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/haji-umrah" class="hover:text-yellow-400 transition">Haji & Umrah</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tour" class="hover:text-yellow-400 transition">Tour Packages</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-yellow-400 transition">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-yellow-400 transition">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="font-semibold text-yellow-500 mb-4 uppercase tracking-wide">
          Contact Info
        </h3>
        <ul class="space-y-3 text-sm text-gray-300">
          <li class="flex items-start space-x-3">
            <Icon icon="mdi:map-marker" class="w-5 h-5 text-yellow-500 mt-0.5" />
            <span>Jl. Haji Ridwan No. 99, Jakarta Selatan</span>
          </li>
          <li class="flex items-center space-x-3">
            <Icon icon="mdi:phone" class="w-5 h-5 text-yellow-500" />
            <a href="tel:+6281234567890" class="hover:text-yellow-400 transition">+62 812 3456 7890</a>
          </li>
          <li class="flex items-center space-x-3">
            <Icon icon="mdi:email" class="w-5 h-5 text-yellow-500" />
            <a href="mailto:info@gvatravel.com" class="hover:text-yellow-400 transition">info@gvatravel.com</a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-semibold text-yellow-500 mb-4 uppercase tracking-wide">
          Newsletter
        </h3>
        <p class="text-gray-400 text-sm mb-3">
          Dapatkan promo dan update terbaru dari kami langsung ke email Anda.
        </p>
        <form @submit.prevent class="flex bg-gray-900 rounded-lg overflow-hidden">
          <input type="email" placeholder="Masukkan email Anda"
            class="w-full px-4 py-2 text-sm bg-transparent outline-none text-white placeholder-gray-500" />
          <button type="submit"
            class="bg-yellow-500 hover:bg-yellow-600 px-4 flex items-center justify-center transition">
            <Icon icon="mdi:send" class="w-5 h-5 text-black" />
          </button>
        </form>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} <span class="text-yellow-500 font-medium">GVA Tour & Travel</span>.
      All Rights Reserved.
    </div>
  </footer>
</template>
