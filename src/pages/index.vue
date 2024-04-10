<script setup lang="ts">
const { count } = storeToRefs(useStore())

const name = ref()

function add() {
  count.value++
}

const router = useRouter()
function go() {
  router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="flex-center h-full flex-col gap-2em">
    <img src="/favicon.svg" class="w-16em">
    <span class="text-3xl">Welcome to Virtuoso</span>
    <span>Template baseed on Vue3, Vite, Unocss</span>

    <div>
      <input v-model="name" type="text" placeholder="Enter your name" @keydown.enter="go">
      <button :disabled="!name" @click="go">
        Go
      </button>
    </div>

    <div>
      <span>
        account : {{ count }}
      </span>
      <button @click="add">
        Add
      </button>
    </div>

    <v-footer />
  </div>
</template>
