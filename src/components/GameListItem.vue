<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Game from '@/types/Game'
import GameService from '@/services/GameService'
import DateUtils from '@/util/DateUtils'

const props = defineProps<{
  game: Game
}>()
const currentInning = ref('')
let formatedDate = ref(DateUtils.formatDate(props.game.gameDate))

onMounted(async () => {
  try {
    if (props.game.status.abstractGameCode.toLocaleLowerCase() === 'l') {
      const response = await GameService.getGameById(props.game.gamePk.toString())
      currentInning.value = `${response.data.liveData.linescore.inningState} ${response.data.liveData.linescore.currentInningOrdinal}`
    }
  } catch (ex) {
    console.error(ex)
  }
})
</script>

<template>
  <div class="bg-slate-100 rounded-md border-gray-200 p-4 cursor-pointer hover:bg-slate-200">
    <h3
      v-if="game.status.abstractGameCode.toLocaleLowerCase() === 'p'"
      class="text-2xl text-center"
    >
      {{ formatedDate }}
    </h3>
    <h3 v-else class="text-2xl text-center">
      {{ game.status.abstractGameState }}
    </h3>
    <div class="grid grid-cols-3 space-x-2">
      <div class="text-center">
        <img
          class="size-12 inline"
          :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.teams.away.team.id}.svg`"
          :alt="`${game.teams.away.team.name} logo`"
        />
        <p>{{ game.teams.away.team.name }}</p>
        <p>{{ game.teams.away.leagueRecord.wins }} - {{ game.teams.away.leagueRecord.losses }}</p>
        <h3
          v-if="['l', 'f'].includes(game.status.abstractGameCode.toLocaleLowerCase())"
          class="text-4xl"
        >
          {{ game.teams.away.score }}
        </h3>
        <br class="text-4xl" v-else />
      </div>
      <div class="text-center">
        <p v-if="game.status.abstractGameCode.toLocaleLowerCase() === 'l' && currentInning !== ''">
          {{ currentInning }}
        </p>
        <p>{{ game.venue.name }}</p>
        <p>@</p>
      </div>
      <div class="text-center">
        <img
          class="size-12 text-center inline"
          :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.teams.home.team.id}.svg`"
          :alt="`${game.teams.home.team.name} logo`"
        />
        <p>{{ game.teams.home.team.name }}</p>
        <p>{{ game.teams.home.leagueRecord.wins }} - {{ game.teams.home.leagueRecord.losses }}</p>
        <h3
          v-if="['l', 'f'].includes(game.status.abstractGameCode.toLocaleLowerCase())"
          class="text-4xl"
        >
          {{ game.teams.home.score }}
        </h3>
        <br class="text-4xl" v-else />
      </div>
    </div>
  </div>
</template>
