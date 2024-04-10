<script setup lang="ts">
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="flex gap-1em">
    <router-link to="/" title="Home">
      <span class="i-icon-park-outline-home" />
    </router-link>

    <router-link to="/testNet" title="Axios">
      <span class="i-icon-park-outline-network-tree" />
    </router-link>

    <a href="https://github.com/chansee97/vite-vue3-starter" target="_blank" title="Github Repo">
      <div class="i-icon-park-outline-github" />
    </a>

    <div title="Toggle" @click="toggleDark">
      <span :class="isDark ? 'i-icon-park-outline-sun' : 'i-icon-park-outline-moon'" />
    </div>
  </div>
</template>
