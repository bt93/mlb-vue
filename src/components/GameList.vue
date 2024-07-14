<script setup lang="ts">
import ScheduleService from '@/services/ScheduleService'
import MLBDate from '@/classes/Date'
import { reactive, onMounted, ref } from 'vue'

const state = reactive({
  date: MLBDate,
  isLoading: true
})



onMounted(async () => {
  try {
    const response = await ScheduleService.getTodaysSchedule()
    state.date = response.data.dates[0]
    state.isLoading = false
  } catch (ex) {
    console.error(ex);
  }
})
</script>

<template>
  <div v-if="state.isLoading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="game in state.date.games" :key="game.gamePk">
          <!-- <h3>{{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}</h3> -->
      </li>
    </ul>
  </div>
</template>
