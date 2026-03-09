<template>
  <div class="">
    <Hero />
    <Quote />
    <ProjectsSection id="works" />
    <SkillsSection />
    <AboutSection id="about-me" />
    <ContactsSection id="contacts" />
  </div>
</template>

<script setup>
import Hero from '../Components/Hero.vue'
import Quote from '../Components/Quote.vue'
import ProjectsSection from '../Components/ProjectsSection.vue'
import SkillsSection from '../Components/SkillsSection.vue'
import AboutSection from '../Components/AboutMe.vue'
import ContactsSection from '../Components/ContactSection.vue'
</script>