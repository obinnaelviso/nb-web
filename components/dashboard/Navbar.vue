<template>
  <nav class="h-16 border-b-2 flex flex-wrap justify-between content-center px-5">
    <button class="grid grid-flow-row cursor-pointer" @click="showSidebar">
      <fa-icon icon="angle-double-right" class="nav-icon transition text-primary-light" />
      <div class="text-xs">MENU</div>
    </button>
    <div class="grid grid-cols-1 gap-4">
      <fa-icon :icon="['far', 'bell']" class="nav-icon" />
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, useStore } from '@nuxtjs/composition-api'
const store = useStore()
const sidebarClass = computed(() => store.state.sidebar.visibility)
function toggleSidebar() {

}
</script>
