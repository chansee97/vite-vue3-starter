<template>
  <div class="flex-center h-full flex-col gap-2em">
    <span class="text-6xl">Home</span>
    <button @click="add">account:{{ num }}</button>

    <router-link to="/testNet">to test axios</router-link>
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