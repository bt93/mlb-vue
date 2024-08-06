<script setup lang="ts">
import type LiveGameDetails from '@/types/LiveGameDetails'
defineProps<{ game: LiveGameDetails }>()
</script>

<template>
  <div class="bg-slate-100 mt-10">
    <table class="w-full text-left">
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
            {{ game.liveData.linescore.innings[inning.num - 1]?.away.runs ?? 0 }}
          </td>
          <td>{{ game.liveData.linescore.teams.away.runs }}</td>
          <td>{{ game.liveData.linescore.teams.away.hits }}</td>
          <td>{{ game.liveData.linescore.teams.away.errors }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
