<script setup lang="ts">
import ScheduleService from '@/services/ScheduleService'
import Schedule from '@/classes/Schedule'
import { reactive, onMounted, ref } from 'vue'

const state = reactive({
  schedule: Schedule,
  isLoading: true
})



onMounted(async () => {
  try {
    const response = await ScheduleService.getTodaysSchedule()
    state.schedule = response.data
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
      <li v-for="game in state.schedule.dates[0].games" :key="game.gamePk">
          <h3>{{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}</h3>
      </li>
    </ul>
  </div>
</template>
