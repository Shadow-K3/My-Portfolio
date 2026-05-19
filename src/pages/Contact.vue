<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import emailjs from '@emailjs/browser';

const { t } = useI18n();

const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSending = ref(false);
const statusMessage = ref('');

const submitForm = () => {
  isSending.value = true;
  statusMessage.value = "";

  // Configuration EmailJS
  const SERVICE_ID = 'service_s2sz5aw'; // Ton ID de service
  const TEMPLATE_ID = 'template_jccq3gs'; // À copier depuis ton dashboard EmailJS
  const PUBLIC_KEY = 'dCVNDZtYm1YV9Teb6';   // À copier depuis Account > Public Key

  const templateParams = {
    from_name: form.value.name,
    from_email: form.value.email,
    message: form.value.message,
    to_name: 'Berol', // Ton nom
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      statusMessage.value = "SUCCESS: Message transmitted securely.";
      form.value = { name: '', email: '', message: '' };
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      statusMessage.value = "ERROR: Connection failed. Please try again.";
    })
    .finally(() => {
      isSending.value = false;
      // Efface le message après 5 secondes
      setTimeout(() => statusMessage.value = '', 5000);
    });
};
</script>

<template>
  <main class="max-w-[1000px] mx-auto   py-16 relative flex-1 w-full">
    
    <div class="mb-16">
       <router-link to="/" class="flex items-center gap-2 mb-8 font-mono text-sm text-teal-400 transition-colors hover:text-white group">
          <span class="transition-transform group-hover:-translate-x-1"><~~</span> {{ t('projectsPage.backHome') }}
        </router-link>
      <h1 class="mb-4 font-mono text-4xl font-light tracking-tight text-white uppercase md:text-5xl">
        <span class="text-[#55B6C2]">/</span>{{ t('contact.title') }}
      </h1>
      <p class="text-lg text-[#ABB2BF] font-light italic font-mono opacity-80">
        {{ t('contact.subtitle') }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-16 lg:grid-cols-5">
      
      <form @submit.prevent="submitForm" class="space-y-8 lg:col-span-3">
        
        <div v-if="statusMessage" 
             :class="statusMessage.includes('ERROR') ? 'text-red-400 border-red-400/20' : 'text-[#55B6C2] border-[#55B6C2]/20'"
             class="p-4 font-mono text-xs border animate-pulse bg-black/20">
          [{{ statusMessage }}]
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="flex flex-col gap-2 group">
            <label class="text-[#55B6C2] font-mono text-xs uppercase tracking-widest">{{ t('contact.form.name') }}</label>
            <input v-model="form.name" type="text" :placeholder="t('contact.form.placeholderName')" required
              class="bg-transparent border border-[#ABB2BF]/20 p-4 text-white outline-none focus:border-[#55B6C2] transition-colors hover:border-[#ABB2BF]/40 font-mono" />
          </div>
          <div class="flex flex-col gap-2 group">
            <label class="text-[#55B6C2] font-mono text-xs uppercase tracking-widest">{{ t('contact.form.email') }}</label>
            <input v-model="form.email" type="email" :placeholder="t('contact.form.placeholderEmail')" required
              class="bg-transparent border border-[#ABB2BF]/20 p-4 text-white outline-none focus:border-[#55B6C2] transition-colors hover:border-[#ABB2BF]/40 font-mono" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-[#55B6C2] font-mono text-xs uppercase tracking-widest">{{ t('contact.form.message') }}</label>
          <textarea v-model="form.message" :placeholder="t('contact.form.placeholderMsg')" rows="5" required
            class="bg-transparent border border-[#ABB2BF]/20 p-4 text-white outline-none focus:border-[#55B6C2] transition-colors hover:border-[#ABB2BF]/40 resize-none font-mono"></textarea>
        </div>

        <button :disabled="isSending" type="submit"
          class="border border-[#55B6C2] text-white px-10 py-4 font-mono hover:bg-[#55B6C2]/10 transition-all flex items-center gap-4 group disabled:opacity-50">
          {{ isSending ? 'EXECUTING_SEND...' : t('contact.form.btn') }}
          <span v-if="!isSending" class="text-[#55B6C2] group-hover:translate-x-2 transition-transform">-></span>
        </button>
      </form>

      <div class="space-y-8 lg:col-span-2">
        <div class="border border-[#ABB2BF]/20 p-8 bg-[#282C33]/10 backdrop-blur-sm relative group overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 bg-[#55B6C2] group-hover:h-full transition-all duration-300"></div>
            <h3 class="flex items-center gap-3 mb-6 font-mono text-xl font-medium text-white">
              <span class="text-[#55B6C2]">></span> {{ t('contact.sidebar.title') }}
          </h3>
          <div class="space-y-6 text-[#ABB2BF] font-mono text-sm">
            <a href="mailto:tchoumiberol816@gmail.com" class="flex flex-col gap-1 transition-colors hover:text-[#55B6C2]">
              <span class="text-[10px] uppercase text-[#55B6C2]/60">Email</span>
              <span>tchoumiberol816@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>