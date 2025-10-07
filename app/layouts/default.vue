<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <HeaderNav />

    <!-- Halaman konten -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-center py-6 mt-12">
      <p class="text-gray-600">© 2025 Obaja Tour & Travel</p>
    </footer>
  </div>
</template>
