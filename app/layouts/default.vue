<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <HeaderNav />

    <!-- Halaman konten -->
    <main class="flex-grow">
      <slot />
    </main>

    <FloatingWhatsapp phone="6281234567890" message="Halo admin, saya mau tanya tentang paket umrah." />

    <!-- Footer -->
    <Footer />
  </div>
</template>
