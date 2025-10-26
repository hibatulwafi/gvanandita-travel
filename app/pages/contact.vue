<script setup>
import Swal from "sweetalert2";
import { useContactStore } from "@/stores/useContactStore";
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { defineAsyncComponent } from "vue";

// 🔹 Reusable Components (daftarkan di setup)
const FormInput = defineAsyncComponent(() =>
  import("../components/form/FormInput.vue")
);
const FormTextarea = defineAsyncComponent(() =>
  import("../components/form/FormTextarea.vue")
);
const ContactInfo = defineAsyncComponent(() =>
  import("../components/contact/ContactInfo.vue") 
);
const SocialLinks = defineAsyncComponent(() =>
  import("../components/contact/SocialLinks.vue")
);

const contact = useContactStore();
const validationErrors = ref({});

onMounted(() => {
  AOS.init({
    duration: 900,
    easing: "ease-in-out",
    once: true,
    offset: 120,
  });
});

async function submitForm(e) {
  e.preventDefault();
  const form = e.target;

  const payload = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    message: form.message.value.trim(),
  };

  validationErrors.value = {};

  try {
    await contact.sendMessage(payload);

    await Swal.fire({
      icon: "success",
      title: "Pesan berhasil dikirim!",
      text: "Terima kasih, kami akan segera menghubungi Anda.",
      showConfirmButton: false,
      timer: 2000,
      position: "top-end",
      toast: true,
    });

    form.reset();
  } catch (err) {
    if (contact.error?.errors) validationErrors.value = contact.error.errors;

    await Swal.fire({
      icon: "error",
      title: "Gagal mengirim pesan",
      text: contact.error?.message || "Terjadi kesalahan. Silakan coba lagi.",
      confirmButtonColor: "#facc15",
    });
  }
}
</script>

<template>
  <div class="bg-white text-gray-800">
    <!-- 🕌 Hero -->
    <section
      class="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
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
          Hubungi Kami
        </h1>
        <p
          class="max-w-2xl mx-auto text-gray-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Kami siap membantu Anda — hubungi kami untuk informasi, konsultasi,
          atau pemesanan perjalanan.
        </p>
      </div>
    </section>

    <!-- 📞 Contact Info & Form -->
    <section class="container mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
      <!-- Info -->
      <div class="space-y-6" data-aos="fade-right">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
        <p class="text-gray-600 mb-6">
          Tim kami siap melayani Anda setiap hari kerja untuk menjawab semua
          pertanyaan terkait layanan Umrah, Haji, dan perjalanan bisnis.
        </p>

        <div class="space-y-4">
          <ContactInfo
            icon="mdi:map-marker"
            title="Kantor Pusat"
            text="Jl. Wolter Monginsidi No.107A, RT 006, RW 006, Rawa Barat, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12170"
            delay="200"
          />
          <ContactInfo
            icon="mdi:phone"
            title="Telepon"
            href="tel:+6282311001068"
            text="+62 823 1100 1068"
            delay="300"
          />
          <ContactInfo
            icon="mdi:email"
            title="Email"
            href="mailto:info@gvanandita.com"
            text="info@gvanandita.com"
            delay="400"
          />
        </div>

        <SocialLinks />
      </div>

      <!-- 📨 Form -->
      <div data-aos="fade-left" data-aos-delay="200">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Kirim Pesan</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <FormInput
            name="name"
            label="Nama Lengkap"
            placeholder="Masukkan nama Anda"
            :error="validationErrors.name"
          />
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Alamat email Anda"
            :error="validationErrors.email"
          />
          <FormInput
            name="phone"
            label="Nomor Telepon"
            placeholder="+62 ..."
            :error="validationErrors.phone"
          />
          <FormTextarea
            name="message"
            label="Pesan"
            placeholder="Tulis pesan Anda di sini..."
            :error="validationErrors.message"
          />

          <button
            type="submit"
            :disabled="contact.loading"
            class="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <Icon
              v-if="!contact.loading"
              icon="mdi:send"
              class="w-5 h-5 mr-2"
            />
            <span
              v-else
              class="animate-spin border-2 border-black border-t-transparent rounded-full w-5 h-5 mr-2"
            ></span>
            {{ contact.loading ? "Mengirim..." : "Kirim Pesan" }}
          </button>
        </form>
      </div>
    </section>

    <!-- 🗺️ Map -->
    <section class="w-full h-[400px]" data-aos="fade-up" data-aos-delay="200">
      <iframe
        class="w-full h-full grayscale-[40%] brightness-[90%]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.8269458395858!2d106.81525355523135!3d-6.238795326894192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16064ded00d%3A0xd279d9fe04659b6!2sJl.%20Wolter%20Monginsidi%20Blok%20S%2FII%20No.107!5e0!3m2!1sid!2sid!4v1760877262508!5m2!1sid!2sid"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>
