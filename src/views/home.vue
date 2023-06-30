<template>
  <div class="flex-center h-full flex-col gap-2em">
    <img src="/public/favicon.svg" class="w-16em">
    <span class="text-3xl">Welcome to Virtuoso</span>
    <span>Template baseed on Vue3, Vite4, Unocss</span>

    <a href="https://github.com/chansee97/virtuoso" class="c-emerald-500 hover:underline">Github Repo</a>

    <button @click="add" class="bg-emerald-500 hover:bg-emerald-700 px-1em py-0.5em rounded">account:{{ num }}</button>

    <router-link to="/testNet" class="c-emerald-500 hover:underline">to test axios</router-link>
  </div>
</template>

<script setup lang="ts">

const num = ref(0)

function add() {
  num.value++
}
</script>

<style scoped>

</style>