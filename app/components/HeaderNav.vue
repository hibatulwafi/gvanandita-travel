<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white backdrop-blur">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="/images/icon.png" alt="Logo" class="h-12 w-auto" />
        <span class="font-bold text-xl tracking-wide">GVA Tour & Travel</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 font-medium items-center">
        <NuxtLink to="/" class="hover:text-primary-500 transition">Beranda</NuxtLink>
        <NuxtLink to="/haji-umrah" class="hover:text-primary-500 transition">Haji & Umrah</NuxtLink>
        <NuxtLink to="/mice" class="hover:text-primary-500 transition">MICE</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary-500 transition">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary-500 transition">Contact</NuxtLink>
      </nav>

      <!-- Auth Buttons (Desktop) -->
      <!-- <div class="hidden md:flex space-x-4 items-center">
        <NuxtLink to="/login"
          class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-primary-500 px-4 py-2 transition">
          Sign In
        </NuxtLink>
        <NuxtLink to="/register"
          class="inline-flex items-center text-sm font-medium bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg shadow transition">
          Sign Up
        </NuxtLink>
      </div> -->

      <!-- Mobile menu button -->
      <button class="md:hidden focus:outline-none text-white" @click="isOpen = !isOpen">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
      <NuxtLink to="/" class="block hover:text-primary-500">Beranda</NuxtLink>
      <NuxtLink to="/haji-umrah" class="block hover:text-primary-500">Haji & Umrah</NuxtLink>
      <NuxtLink to="/mice" class="block hover:text-primary-500">MICE</NuxtLink>
      <NuxtLink to="/about" class="block hover:text-primary-500">About</NuxtLink>
      <NuxtLink to="/contact" class="block hover:text-primary-500">Contact</NuxtLink>

      <!-- Auth Buttons (Mobile) -->
      <!-- <div class="pt-4 border-t border-gray-700 space-y-2">
        <NuxtLink to="/login" class="block text-blue-400 hover:text-primary-500 px-4 py-2">
          Sign In
        </NuxtLink>
        <NuxtLink to="/register"
          class="block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-center">
          Sign Up
        </NuxtLink>
      </div> -->
    </div>
  </header>
</template>
