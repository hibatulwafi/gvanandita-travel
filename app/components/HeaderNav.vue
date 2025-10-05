<script setup>
import { ref } from "vue";

// state
const isOpen = ref(false);
const layananOpen = ref(false);
const tentangOpen = ref(false);

// dropdown data
const layananMenu = [
  { name: "Haji & Umrah", link: "/haji-umrah" },
  { name: "Corporate", link: "/corporate" },
  { name: "MICE", link: "/mice" },
];

const tentangMenu = [
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Career", link: "/career" },
];
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white"
  >
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" class="h-9 w-auto" />
        <span class="font-bold text-xl tracking-wide">Obaja Travel</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 font-medium relative items-center">
        <NuxtLink to="/" class="hover:text-orange-400 transition"
          >Home</NuxtLink
        >

        <!-- Dropdown Layanan -->
        <div
          class="relative"
          @mouseenter="layananOpen = true"
          @mouseleave="layananOpen = false"
        >
          <button
            class="hover:text-orange-400 transition flex items-center space-x-1"
          >
            <span>Layanan</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="layananOpen"
            class="absolute left-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg py-2"
          >
            <NuxtLink
              v-for="item in layananMenu"
              :key="item.link"
              :to="item.link"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Dropdown Tentang -->
        <div
          class="relative"
          @mouseenter="tentangOpen = true"
          @mouseleave="tentangOpen = false"
        >
          <button
            class="hover:text-orange-400 transition flex items-center space-x-1"
          >
            <span>Tentang</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="tentangOpen"
            class="absolute left-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg py-2"
          >
            <NuxtLink
              v-for="item in tentangMenu"
              :key="item.link"
              :to="item.link"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>

      <!-- Auth Buttons (Desktop) -->
      <div class="hidden md:flex space-x-4 items-center">
        <NuxtLink
          to="/login"
          class="inline-flex items-center text-sm font-medium text-blue-400 hover:text-orange-400 px-4 py-2 transition"
        >
          Sign In
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="inline-flex items-center text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Sign Up
        </NuxtLink>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden focus:outline-none text-white"
        @click="isOpen = !isOpen"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isOpen"
      class="md:hidden bg-black/90 text-white px-6 py-4 space-y-4"
    >
      <NuxtLink to="/" class="block hover:text-orange-400">Home</NuxtLink>

      <details>
        <summary class="cursor-pointer hover:text-orange-400">Layanan</summary>
        <div class="ml-4 space-y-2 mt-2">
          <NuxtLink
            v-for="item in layananMenu"
            :key="item.link"
            :to="item.link"
            class="block hover:text-orange-400"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </details>

      <details>
        <summary class="cursor-pointer hover:text-orange-400">Tentang</summary>
        <div class="ml-4 space-y-2 mt-2">
          <NuxtLink
            v-for="item in tentangMenu"
            :key="item.link"
            :to="item.link"
            class="block hover:text-orange-400"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </details>

      <!-- Auth Buttons (Mobile) -->
      <div class="pt-4 border-t border-gray-700 space-y-2">
        <NuxtLink
          to="/login"
          class="block text-blue-400 hover:text-orange-400 px-4 py-2"
        >
          Sign In
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center"
        >
          Sign Up
        </NuxtLink>
      </div>
    </div>
  </header>
</template>