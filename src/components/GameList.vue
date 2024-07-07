<script setup lang="ts">
import GameService from '@/services/GameService'
import { reactive, onMounted } from 'vue'

const state = reactive({
  data: Object
})

onMounted(async () => {
  const response = await GameService.getTodaysGames()
  state.data = response.data
  console.log(state.data)
})
</script>

<template>
  <div v-for="game in state.data.dates[0].games" :key="game.gamePk">
    {{ game.teams.away.team.name }} @ {{ game.teams.home.team.name }}
  </div>
</template>
