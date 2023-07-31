<script setup lang="ts">
const { count } = storeToRefs(useStore())

const route = useRoute()
</script>

<template>
  <div class="h-full flex-center flex-col gap-1em">
    <h1 class="text-3xl">
      Hi!{{ route.params.name }}
    </h1>
    <h1 class="text-xl">
      Your  count:{{ count }}
    </h1>
    <router-link to="/">
      <n-button title="Back" size="small" type="primary">
        Back
      </n-button>
    </router-link>

    <v-footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
