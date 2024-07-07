<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="border-b bg-sky-300 border-sky-200">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <a
            class="flex flex-shrink-0 mr-7 text-xl font-bold text-orange-300"
            href="https://www.mlb.com/"
            >MLB</a
          >
          <RouterLink to="/">Home</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
