<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style="background-image: url('https://dummyimage.com/1600x900/000/fff&text=About+GVA+Tour+%26+Travel');">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
          Tentang Kami
        </h1>
        <p class="max-w-2xl mx-auto text-gray-200 text-lg">
          Melayani dengan sepenuh hati, menghadirkan pengalaman spiritual dan perjalanan terbaik untuk Anda.
        </p>
      </div>
    </section>

    <!-- Profil Perusahaan -->
    <section class="container mx-auto py-16 px-6 text-center md:text-left">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <img src="https://dummyimage.com/640x480/111/fff&text=GVA+Travel+Team" alt="GVA Travel"
          class="rounded-lg shadow-lg" />
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Siapa Kami?
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            <span class="font-semibold text-yellow-500">GVA Tour & Travel</span>
            adalah perusahaan penyedia layanan perjalanan Haji, Umrah, dan wisata religi terpercaya di Indonesia.
            Kami berdiri dengan komitmen untuk memberikan pengalaman perjalanan spiritual yang aman, nyaman, dan
            berkesan.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Dengan tim profesional dan berpengalaman, kami telah membantu ribuan jamaah menjalankan ibadah dan
            perjalanan
            ke berbagai destinasi dunia. Kepercayaan dan kenyamanan pelanggan adalah prioritas utama kami.
          </p>
        </div>
      </div>
    </section>

    <!-- Visi Misi -->
    <section class="bg-black text-white py-16">
      <div class="container mx-auto px-6 text-center md:text-left">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">Visi Kami</h3>
            <p class="text-gray-300">
              Menjadi penyedia layanan perjalanan Umrah, Haji, dan MICE terbaik di Indonesia
              dengan standar pelayanan yang unggul dan terpercaya.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">Misi Kami</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start space-x-2">
                <Icon icon="mdi:check-circle" class="text-yellow-500 w-5 h-5 mt-0.5" />
                <span>Memberikan pelayanan ibadah dengan profesionalisme dan kejujuran.</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon icon="mdi:check-circle" class="text-yellow-500 w-5 h-5 mt-0.5" />
                <span>Menghadirkan pengalaman spiritual yang aman, nyaman, dan bermakna.</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon icon="mdi:check-circle" class="text-yellow-500 w-5 h-5 mt-0.5" />
                <span>Menjadi mitra perjalanan terpercaya bagi pelanggan korporasi dan keluarga.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Nilai Perusahaan -->
    <section class="container mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-bold mb-10">Nilai-Nilai Perusahaan</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:handshake" class="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <h4 class="font-semibold text-lg mb-1">Integritas</h4>
          <p class="text-gray-600 text-sm">Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap layanan.</p>
        </div>
        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:heart" class="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <h4 class="font-semibold text-lg mb-1">Pelayanan</h4>
          <p class="text-gray-600 text-sm">Melayani pelanggan dengan sepenuh hati demi kenyamanan dan ketenangan ibadah.
          </p>
        </div>
        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:lightbulb-on" class="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <h4 class="font-semibold text-lg mb-1">Inovasi</h4>
          <p class="text-gray-600 text-sm">Terus berinovasi dalam teknologi dan sistem perjalanan agar efisien dan
            modern.</p>
        </div>
        <div class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition">
          <Icon icon="mdi:earth" class="w-10 h-10 text-yellow-500 mx-auto mb-3" />
          <h4 class="font-semibold text-lg mb-1">Kebersamaan</h4>
          <p class="text-gray-600 text-sm">Membangun hubungan baik antara jamaah, mitra, dan tim kerja kami.</p>
        </div>
      </div>
    </section>

    <!-- Tim Kami -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-10">Tim Kami</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-md p-5">
            <img src="https://dummyimage.com/300x300/000/fff&text=CEO" alt="CEO"
              class="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
            <h4 class="font-semibold text-lg text-gray-900">Fajar Setiawan</h4>
            <p class="text-yellow-600 text-sm mb-2">Chief Executive Officer</p>
            <div class="flex justify-center space-x-3">
              <Icon icon="mdi:linkedin" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
              <Icon icon="mdi:instagram" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-5">
            <img src="https://dummyimage.com/300x300/111/fff&text=Director" alt="Director"
              class="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
            <h4 class="font-semibold text-lg text-gray-900">Farah Anindita</h4>
            <p class="text-yellow-600 text-sm mb-2">Managing Director</p>
            <div class="flex justify-center space-x-3">
              <Icon icon="mdi:linkedin" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
              <Icon icon="mdi:instagram" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-5">
            <img src="https://dummyimage.com/300x300/333/fff&text=Manager" alt="Manager"
              class="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
            <h4 class="font-semibold text-lg text-gray-900">Rizky Putra</h4>
            <p class="text-yellow-600 text-sm mb-2">Operation Manager</p>
            <div class="flex justify-center space-x-3">
              <Icon icon="mdi:linkedin" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
              <Icon icon="mdi:instagram" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-5">
            <img src="https://dummyimage.com/300x300/555/fff&text=Marketing" alt="Marketing"
              class="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
            <h4 class="font-semibold text-lg text-gray-900">Siti Lestari</h4>
            <p class="text-yellow-600 text-sm mb-2">Marketing Head</p>
            <div class="flex justify-center space-x-3">
              <Icon icon="mdi:linkedin" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
              <Icon icon="mdi:instagram" class="text-gray-500 hover:text-yellow-500 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-yellow-500 text-black py-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ingin Mengenal Kami Lebih Dekat?</h2>
      <p class="mb-8 text-gray-800 max-w-2xl mx-auto">
        Kami siap membantu mewujudkan perjalanan spiritual dan bisnis Anda dengan layanan terbaik.
      </p>
      <NuxtLink to="/contact"
        class="inline-flex items-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
        <Icon icon="mdi:phone" class="w-5 h-5 mr-2" />
        Hubungi Kami
      </NuxtLink>
    </section>
  </div>
</template>
