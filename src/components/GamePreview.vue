<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
import VenueData from '@/components/VenueData.vue'
import { reactive } from 'vue'

const props = defineProps<{ game: LiveGameDetails }>()
const probablePitchers = reactive({
  away: props.game.gameData.players[`ID${props.game.gameData.probablePitchers.away.id}`],
  awayStats:
    props.game.liveData.boxscore.teams.away.players[
      `ID${props.game.gameData.probablePitchers.away.id}`
    ].seasonStats.pitching,
  home: props.game.gameData.players[`ID${props.game.gameData.probablePitchers.home.id}`],
  homeStats:
    props.game.liveData.boxscore.teams.home.players[
      `ID${props.game.gameData.probablePitchers.home.id}`
    ].seasonStats.pitching
})

const retrieveLineups = () => {
  const lineups = {
    away: [] as any,
    home: [] as any
  }

  for (let player of props.game.liveData.boxscore.teams.away.battingOrder) {
    lineups.away.push(props.game.liveData.boxscore.teams.away.players[`ID${player}`])
  }
  for (let player of props.game.liveData.boxscore.teams.home.battingOrder) {
    lineups.home.push(props.game.liveData.boxscore.teams.home.players[`ID${player}`])
  }

  return lineups
}

const lineups = reactive(retrieveLineups())
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
        <p>
          {{ probablePitchers.awayStats.wins }} - {{ probablePitchers.awayStats.losses }} |
          {{ probablePitchers.awayStats.era }} ERA
        </p>
        <p>{{ probablePitchers.awayStats.strikeOuts }} K</p>
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
        <p>
          {{ probablePitchers.homeStats.wins }} - {{ probablePitchers.homeStats.losses }} |
          {{ probablePitchers.homeStats.era }} ERA
        </p>
        <p>{{ probablePitchers.homeStats.strikeOuts }} K</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-24">
    <div>
      <ul>
        <li v-for="(player, i) in lineups.away" :key="i">
          <p>
            {{ i + 1 }} <span />| {{ player.position.abbreviation }} | <span />
            {{ player.person.fullName }} <span /> | {{ player.seasonStats.batting.avg }} |
            {{ player.seasonStats.batting.homeRuns }}
          </p>
        </li>
      </ul>
    </div>
    <div class="text-center"></div>
    <div class="text-center" v-if="lineups.home.length > 0">
      <div>
        <ul>
          <li v-for="(player, i) in lineups.home" :key="i">
            <p>
              {{ i + 1 }} <span />| {{ player.position.abbreviation }} | <span />
              {{ player.person.fullName }} <span /> | {{ player.seasonStats.batting.avg }} |
              {{ player.seasonStats.batting.homeRuns }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
