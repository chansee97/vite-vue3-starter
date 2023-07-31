<script setup lang="ts">

</script>

<template>
  <div class="h-full flex flex-col gap-2em justify-center items-center">
    <span class="text-7xl">
      😵
    </span>
    <h1 class="text-4xl text-gray-500 op-60">
      404 | <span>Not Found</span>
    </h1>
    <router-link to="/">
      <n-button type="primary">
        返回首页
      </n-button>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
