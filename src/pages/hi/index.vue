<script setup lang="ts">
import { useStore } from '@/store'

const { count } = storeToRefs(useStore())
</script>

<template>
  <div class="h-full flex-center flex-col gap-1em">
    <h1 class="text-3xl">
      Hi!
    </h1>
    <h1 class="text-xl">
      count:{{ count }}
    </h1>
    <router-link to="/">
      <n-button type="info">
        To Index
      </n-button>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
