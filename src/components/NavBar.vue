<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavLinks from '@/components/NavLinks.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div class="flex-1 flex justify-between items-center">
          <RouterLink :to="{ name: 'home' }" class="text-xl">Vue MLB</RouterLink>
      </div>

      <button @click="toggleMenu" value="hamburger" class="md:hidden flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-gray-400">
        <!-- Hamburger Icon (3 lines) -->
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
        <span class="h-0.5 rounded bg-gray-600 w-full"></span>
      </button>

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
              <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <NavLinks />
              </ul>
          </nav>
      </div>
      <div v-if="isMenuOpen" class="md:hidden md:items-center md:w-auto w-full" id="menu">
          <nav>
              <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <NavLinks />
              </ul>
          </nav>
      </div>
  </header>
</template>
