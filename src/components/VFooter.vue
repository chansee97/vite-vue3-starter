<script setup lang="ts">

</script>

<template>
  <div class="flex gap-1em mt-2em">
    <router-link to="/">
      <n-button title="Home">
        <span class="i-icon-park-outline-home" />
      </n-button>
    </router-link>
    <router-link to="/testNet">
      <n-button title="Axios">
        <span class="i-icon-park-outline-network-tree" />
      </n-button>
    </router-link>
    <a
      href="https://github.com/chansee97/virtuoso"
    > <n-button title="Github Repo"><div class="i-icon-park-outline-github" /></n-button></a>
  </div>
</template>
