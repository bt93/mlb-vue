<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import GameService from '@/services/GameService'
import type LiveGameDetails from '@/types/LiveGameDetails'

const props = defineProps({
  id: String
})

const data = reactive({
  game: {},
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await GameService.getGameById(props.id ?? '0')
    data.game = response.data
    data.isLoading = false
  } catch (ex) {
    console.error(ex)
  }
})
</script>

<template>
  <div v-if="!data.isLoading">
    <h1>{{ data.game.gameData.status.abstractGameState }}</h1>
  </div>
</template>
