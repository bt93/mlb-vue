<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type Game from '@/types/Game'

const props = defineProps<{
  game: Game
}>()

const dateTimeFormat = Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric'
})
const date = new Date(props.game.gameDate)
const parts = dateTimeFormat.formatToParts(date)
let value = ''
parts.forEach((obj) => (value += `${obj.value}`))
let formatedDate = ref(value)
</script>

<template>
  <div class="bg-slate-100 rounded-md border-gray-200 hover:border-2 p-4">
    <h3 v-if="game.status.statusCode.toLocaleLowerCase() === 'p'" class="text-2xl text-center">
      {{ formatedDate }}
    </h3>
    <h3 v-else-if="game.status.statusCode.toLocaleLowerCase() === 'i'" class="text-2xl text-center">
      Live
    </h3>
    <h3 v-else-if="game.status.statusCode.toLocaleLowerCase() === 'f'" class="text-2xl text-center">
      Final
    </h3>
    <div class="grid grid-cols-3 space-x-2">
      <div class="text-center">
        <img
          class="size-12 inline"
          :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.teams.away.team.id}.svg`"
        />
        <p>{{ game.teams.away.team.name }}</p>
        <p>{{ game.teams.away.leagueRecord.wins }} - {{ game.teams.away.leagueRecord.losses }}</p>
        <h3 v-if="game.status.statusCode.toLocaleLowerCase() !== 'p'" class="text-4xl">
          {{ game.teams.away.score }}
        </h3>
      </div>
      <div class="text-center">
        <p>@</p>
      </div>
      <div class="text-center">
        <img
          class="size-12 text-center inline"
          :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.teams.home.team.id}.svg`"
        />
        <p>{{ game.teams.home.team.name }}</p>
        <p>{{ game.teams.home.leagueRecord.wins }} - {{ game.teams.home.leagueRecord.losses }}</p>
        <h3 v-if="game.status.statusCode.toLocaleLowerCase() !== 'p'" class="text-4xl">
          {{ game.teams.home.score }}
        </h3>
      </div>
    </div>
  </div>
</template>
