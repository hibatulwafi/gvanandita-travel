<script setup>
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 900,
    easing: "ease-in-out",
    once: true,
    offset: 120,
  });
});
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- 🕋 Hero Section -->
    <section
      class="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
      style="background-image: url('/images/bg-makkah.jpg')"
      data-aos="fade-in"
    >
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="relative text-center text-white px-6">
        <h1
          class="text-4xl md:text-5xl font-bold text-yellow-500 mb-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Tentang Kami
        </h1>
        <p
          class="max-w-2xl mx-auto text-gray-200 text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Melayani dengan sepenuh hati, menghadirkan pengalaman spiritual dan
          perjalanan terbaik untuk Anda.
        </p>
      </div>
    </section>

    <!-- 🕌 Profil Perusahaan -->
    <section class="container mx-auto py-16 px-6 text-center md:text-left">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://dummyimage.com/640x480/111/fff&text=GVA+Travel+Team"
          alt="GVA Travel"
          class="rounded-lg shadow-lg"
          data-aos="fade-right"
        />
        <div data-aos="fade-left" data-aos-delay="200">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Siapa Kami?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            <span class="font-semibold text-yellow-500">GVA Tour & Travel</span>
            adalah perusahaan penyedia layanan perjalanan Haji, Umrah, dan
            wisata religi terpercaya di Indonesia. Kami berdiri dengan komitmen
            untuk memberikan pengalaman perjalanan spiritual yang aman, nyaman,
            dan berkesan.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Dengan tim profesional dan berpengalaman, kami telah membantu ribuan
            jamaah menjalankan ibadah dan perjalanan ke berbagai destinasi
            dunia. Kepercayaan dan kenyamanan pelanggan adalah prioritas utama
            kami.
          </p>
        </div>
      </div>
    </section>

    <!-- 🌙 Visi Misi -->
    <section
      class="bg-black text-white py-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="container mx-auto px-6 text-center md:text-left">
        <div class="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">Visi Kami</h3>
            <p class="text-gray-300">
              Menjadi penyedia layanan perjalanan Umrah, Haji, dan MICE terbaik
              di Indonesia dengan standar pelayanan yang unggul dan terpercaya.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h3 class="text-2xl font-bold text-yellow-500 mb-4">Misi Kami</h3>
            <ul class="space-y-3 text-gray-300">
              <li
                v-for="(item, i) in [
                  'Memberikan pelayanan ibadah dengan profesionalisme dan kejujuran.',
                  'Menghadirkan pengalaman spiritual yang aman, nyaman, dan bermakna.',
                  'Menjadi mitra perjalanan terpercaya bagi pelanggan korporasi dan keluarga.',
                ]"
                :key="i"
                class="flex items-start space-x-2"
                :data-aos="'fade-up'"
                :data-aos-delay="300 + i * 150"
              >
                <Icon
                  icon="mdi:check-circle"
                  class="text-yellow-500 w-5 h-5 mt-0.5"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 💎 Nilai Perusahaan -->
    <section
      class="container mx-auto py-16 px-6 text-center"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <h2 class="text-3xl font-bold mb-10">Nilai-Nilai Perusahaan</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(value, i) in [
            {
              icon: 'mdi:handshake',
              title: 'Integritas',
              desc: 'Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap layanan.',
            },
            {
              icon: 'mdi:heart',
              title: 'Pelayanan',
              desc: 'Melayani pelanggan dengan sepenuh hati demi kenyamanan ibadah.',
            },
            {
              icon: 'mdi:lightbulb-on',
              title: 'Inovasi',
              desc: 'Terus berinovasi dalam teknologi dan sistem perjalanan agar efisien dan modern.',
            },
            {
              icon: 'mdi:earth',
              title: 'Kebersamaan',
              desc: 'Membangun hubungan baik antara jamaah, mitra, dan tim kerja kami.',
            },
          ]"
          :key="i"
          class="p-6 border border-yellow-500/20 rounded-lg hover:border-yellow-500 transition"
          :data-aos="'zoom-in'"
          :data-aos-delay="200 * i"
        >
          <Icon
            :icon="value.icon"
            class="w-10 h-10 text-yellow-500 mx-auto mb-3"
          />
          <h4 class="font-semibold text-lg mb-1">{{ value.title }}</h4>
          <p class="text-gray-600 text-sm">{{ value.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ☎️ CTA -->
    <section class="bg-yellow-500 text-black py-16 text-center">
      <h2
        class="text-3xl md:text-4xl font-bold mb-4"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Ingin Mengenal Kami Lebih Dekat?
      </h2>
      <p
        class="mb-8 text-gray-800 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Kami siap membantu mewujudkan perjalanan spiritual dan bisnis Anda
        dengan layanan terbaik.
      </p>
      <a
        href="https://wa.me/6282311001068?text=Halo%20Admin%2C%20saya%20ingin%20mengenal%20lebih%20dekat%20tentang%20GVA%20Travel."
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center bg-black text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        data-aos="flip-up"
        data-aos-delay="600"
      >
        <Icon icon="mdi:phone" class="w-5 h-5 mr-2" />
        Hubungi Kami
      </a>
    </section>
  </div>
</template>
