<script setup lang="ts">
import ScheduleService from '@/services/ScheduleService'
import type MLBDate from '@/types/Date'
import { reactive, onMounted, ref } from 'vue'

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
    <ul>
      <li v-for="game in date.games" :key="game.gamePk.toString()">
        <h3>{{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}</h3>
      </li>
    </ul>
  </div>
  <div v-else>
    <h3>No Games or Events today.</h3>
  </div>
</template>
