<script setup lang="ts">
import ScheduleService from '@/services/ScheduleService'
import type MLBDate from '@/types/Date'
import { reactive, onMounted, ref } from 'vue'
import GameListItem from '@/components/GameListItem.vue'

let isLoading = ref(true)
let date: MLBDate = reactive({
  date: '',
  totalEvents: 0,
  totalGames: 0,
  totalGamesInProgress: 0,
  totalItems: 0,
  games: []
})

onMounted(async () => {
  try {
    const response = await ScheduleService.getTodaysSchedule()
    date = response.data.dates[0]
    isLoading.value = false
  } catch (ex) {
    console.error(ex)
  }
})
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="date !== undefined">
    <div class="grid grid-cols-2 gap-4 mt-5">
      <GameListItem v-for="game in date.games" :key="game.gamePk.toString()" :game="game" />
    </div>
  </div>
  <div v-else>
    <h3>No Games or Events today.</h3>
  </div>
</template>
