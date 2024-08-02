<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import GameService from '@/services/GameService'
import type LiveGameDetails from '@/types/LiveGameDetails'
import ScoreCard from '@/components/ScoreCard.vue'

const props = defineProps({
  id: String
})
const isLoading = ref(true)
let game: LiveGameDetails = reactive({
  gamePk: 0,
  gameData: {
    status: {
      abstractGameState: ''
    }
  }
})

onMounted(async () => {
  try {
    const response = await GameService.getGameById(props.id ?? '0')
    game = response.data
    isLoading.value = false
  } catch (ex) {
    console.error(ex)
  }
})
</script>

<template>
  <div v-if="isLoading">
    <h2 class="text-2xl text-center">Loading...</h2>
  </div>
  <div v-else>
    <h1 class="my-10 text-2xl text-center">{{ game.gameData.status.abstractGameState }}</h1>
    <ScoreCard :game="game" />
  </div>
</template>
