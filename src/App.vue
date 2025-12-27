<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>
