<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
const props = defineProps<{ game: LiveGameDetails }>()
</script>

<template>
  <div class="bg-slate-100 mt-10">
    <table class="p-10">
      <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
      </tr>
    </table>
  </div>
</template>
