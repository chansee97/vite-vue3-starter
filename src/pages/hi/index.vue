<script setup lang="ts">

</script>

<template>
  <div class="h-full flex-center">
    <h1 class="text-3xl">
      Hi!
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
