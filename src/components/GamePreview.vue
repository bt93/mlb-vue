<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
import VenueData from '@/components/VenueData.vue'
import { reactive } from 'vue'

const props = defineProps<{ game: LiveGameDetails }>()
const probablePitchers = reactive({
  away: props.game.gameData.players[`ID${props.game.gameData.probablePitchers.away.id}`],
  home: props.game.gameData.players[`ID${props.game.gameData.probablePitchers.home.id}`]
})

console.log(probablePitchers)
</script>

<template>
  <div class="grid grid-cols-3 gap-2 mt-5">
    <div class="text-center">
      <h3>{{ game.gameData.teams.away.name }}</h3>
      <img
        class="size-24 text-center inline mt-12"
        :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.gameData.teams.away.id}.svg`"
        :alt="`${game.gameData.teams.away.name} logo`"
      />
      <p>
        {{ game.gameData.teams.away.record.leagueRecord.wins }} -
        {{ game.gameData.teams.away.record.leagueRecord.losses }}
      </p>
    </div>
    <VenueData :game="game" />
    <div class="text-center">
      <h3>{{ game.gameData.teams.home.name }}</h3>
      <img
        class="size-24 text-center inline mt-12"
        :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.gameData.teams.home.id}.svg`"
        :alt="`${game.gameData.teams.home.name} logo`"
      />
      <p>
        {{ game.gameData.teams.home.record.leagueRecord.wins }} -
        {{ game.gameData.teams.home.record.leagueRecord.losses }}
      </p>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-24">
    <div class="text-center">
      <h3 class="font-bold">
        {{ game.gameData.probablePitchers.away.fullName }}
      </h3>
      <img
        class="size-30 text-center inline mt-12"
        :src="`https://midfield.mlbstatic.com/v1/people/${game.gameData.probablePitchers.away.id}/spots/120`"
        :alt="`${game.gameData.probablePitchers.away.fullName}`"
      />
      <div class="text-center">
        <p>
          {{ probablePitchers.away.pitchHand.code }}H{{
            probablePitchers.away.primaryPosition.abbreviation
          }}
          | # {{ probablePitchers.away.primaryNumber }}
        </p>
      </div>
    </div>
    <div class="text-center">
      <h3 class="font-bold">Probable Pitchers</h3>
    </div>
    <div class="text-center">
      <h3 class="font-bold">
        {{ game.gameData.probablePitchers.home.fullName }}
      </h3>
      <img
        class="size-30 text-center inline mt-12"
        :src="`https://midfield.mlbstatic.com/v1/people/${game.gameData.probablePitchers.home.id}/spots/120`"
        :alt="`${game.gameData.probablePitchers.home.fullName}`"
      />
      <div class="text-center">
        <p>
          {{ probablePitchers.home.pitchHand.code }}H{{
            probablePitchers.home.primaryPosition.abbreviation
          }}
          | # {{ probablePitchers.home.primaryNumber }}
        </p>
      </div>
    </div>
  </div>
</template>
