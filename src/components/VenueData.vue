<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
defineProps<{ game: LiveGameDetails }>()
</script>

<template>
  <div class="text-center">
    <h3>{{ game.gameData.venue.name }}</h3>
    <h4>
      {{ game.gameData.venue.location.city }}, {{ game.gameData.venue.location.state }},
      {{ game.gameData.venue.location.country }}
    </h4>
  </div>
</template>
