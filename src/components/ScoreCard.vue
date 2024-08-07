<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
defineProps<{ game: LiveGameDetails }>()
</script>

<template>
  <div class="mt-10">
    <div class="grid grid-cols-2">
      <p>
        {{ game.liveData.linescore.inningHalf }} {{ game.liveData.linescore.currentInningOrdinal }}
      </p>
      <p>
        Strikes - {{ game.liveData.linescore.strikes }} | Balls -
        {{ game.liveData.linescore.balls }} | Outs - {{ game.liveData.linescore.outs }}
      </p>
    </div>
    <table class="w-full text-left bg-slate-10">
      <thead class="uppercase">
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th v-for="inning in game.liveData.linescore.innings" :key="inning.num">
          {{ inning.num }}
        </th>
        <th>R</th>
        <th>H</th>
        <th>E</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              class="size-12 inline"
              :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.gameData.teams.away.id}.svg`"
              :alt="`${game.gameData.teams.away.name} logo`"
            />
          </td>
          <td>
            {{ game.gameData.teams.away.name }}
          </td>
          <td v-for="inning in game.liveData.linescore.innings" :key="inning.num">
            {{ game.liveData.linescore.innings[inning.num - 1]?.away.runs ?? 0 }}
          </td>
          <td>{{ game.liveData.linescore.teams.away.runs }}</td>
          <td>{{ game.liveData.linescore.teams.away.hits }}</td>
          <td>{{ game.liveData.linescore.teams.away.errors }}</td>
        </tr>
        <tr>
          <td>
            <img
              class="size-12 inline"
              :src="`https://www.mlbstatic.com/team-logos/team-cap-on-light/${game.gameData.teams.home.id}.svg`"
              :alt="`${game.gameData.teams.home.name} logo`"
            />
          </td>
          <td>
            {{ game.gameData.teams.home.name }}
          </td>
          <td v-for="inning in game.liveData.linescore.innings" :key="inning.num">
            {{ game.liveData.linescore.innings[inning.num - 1]?.home.runs ?? 0 }}
          </td>
          <td>{{ game.liveData.linescore.teams.home.runs }}</td>
          <td>{{ game.liveData.linescore.teams.home.hits }}</td>
          <td>{{ game.liveData.linescore.teams.home.errors }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
