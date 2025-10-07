<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style="background-image: url('https://dummyimage.com/1600x900/000/fff&text=Contact+Us');">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Hubungi Kami</h1>
        <p class="max-w-2xl mx-auto text-gray-300">
          Kami siap membantu Anda — hubungi kami untuk informasi, konsultasi, atau pemesanan perjalanan.
        </p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
      <!-- Contact Info -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
        <p class="text-gray-600 mb-6">
          Tim kami siap melayani Anda setiap hari kerja untuk menjawab semua pertanyaan terkait
          layanan Umrah, Haji, dan perjalanan bisnis.
        </p>

        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <Icon icon="mdi:map-marker" class="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <p class="font-medium text-gray-800">Kantor Pusat</p>
              <p class="text-gray-600 text-sm">Jl. Haji Ridwan No. 99, Jakarta Selatan</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <Icon icon="mdi:phone" class="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <p class="font-medium text-gray-800">Telepon</p>
              <a href="tel:+6281234567890" class="text-gray-600 text-sm hover:text-yellow-600 transition">
                +62 812 3456 7890
              </a>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <Icon icon="mdi:email" class="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <p class="font-medium text-gray-800">Email</p>
              <a href="mailto:info@gvatravel.com" class="text-gray-600 text-sm hover:text-yellow-600 transition">
                info@gvatravel.com
              </a>
            </div>
          </div>
        </div>

        <!-- Social -->
        <div class="mt-6">
          <h3 class="font-semibold text-gray-800 mb-3">Ikuti Kami</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-yellow-500 transition">
              <Icon icon="mdi:facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="hover:text-yellow-500 transition">
              <Icon icon="mdi:instagram" class="w-6 h-6" />
            </a>
            <a href="#" class="hover:text-yellow-500 transition">
              <Icon icon="mdi:youtube" class="w-6 h-6" />
            </a>
            <a href="#" class="hover:text-yellow-500 transition">
              <Icon icon="mdi:whatsapp" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Kirim Pesan</h2>
        <form @submit.prevent="alert('Pesan terkirim!')" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input type="text"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              placeholder="Masukkan nama Anda" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              placeholder="Alamat email Anda" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
            <input type="text"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              placeholder="+62 ..." />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
            <textarea rows="5"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              placeholder="Tulis pesan Anda di sini..." required></textarea>
          </div>

          <button type="submit"
            class="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center">
            <Icon icon="mdi:send" class="w-5 h-5 mr-2" />
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>

    <!-- Map Section -->
    <section class="w-full h-[400px]">
      <iframe class="w-full h-full grayscale-[60%] brightness-[90%]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.603197026765!2d106.81854887498563!3d-6.187672693806062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f1f0348e15%3A0x53aafc82db44ea8e!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <!-- CTA -->
    <section class="bg-black text-yellow-500 text-center py-16">
      <h2 class="text-3xl font-bold mb-4">Siap Berangkat Bersama Kami?</h2>
      <p class="text-gray-400 mb-8">
        Tim kami akan membantu Anda merencanakan perjalanan Umrah, Haji, atau bisnis dengan layanan terbaik.
      </p>
      <NuxtLink to="/haji-umrah"
        class="inline-flex items-center bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
        <Icon icon="mdi:airplane" class="w-5 h-5 mr-2" />
        Lihat Paket Umrah & Haji
      </NuxtLink>
    </section>
  </div>
</template>
