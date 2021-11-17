<template>
  <header>
    <nav class="flex px-8 py-5 shadow justify-center">
      <div class="flex-1 container flex flex-wrap justify-between content-center">
        <div class="flex-1 flex-shrink">
          <a href="#logo"><img src="~/assets/img/logo.svg" class="w-36 md:w-48"></a>
        </div>
        <div class="flex-1 flex flex-grow justify-end">
          <button @click="showNavLinks = !showNavLinks">N</button>
        </div>
      </div>
    </nav>
    <div v-if="showNavLinks" class="flex justify-center shadow flex-wrap">
      <a href="#categories" class="px-3 hover:text-primary">Categories</a>
      <a href="#contactus" class="px-3 hover:text-primary">Contact Us</a>
      <a href="#aboutus" class="px-3 hover:text-primary">About Us</a>
      <a href="#register" class="px-3 hover:text-primary">Register Your Store</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from '@nuxtjs/composition-api'
const showNavLinks = ref(false)
</script>
