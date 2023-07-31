<script setup lang="ts">
import { useMessage } from 'naive-ui'

const message = useMessage()
const { count } = storeToRefs(useStore())

const name = ref()

function add() {
  count.value++
  message.success(`total : ${count.value}`)
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
    <span>Template baseed on Vue3, Vite4, Unocss</span>

    <n-space>
      <n-input v-model:value="name" type="text" placeholder="Enter your name" />
      <n-button type="primary" :disabled="!name" @click="go">
        Go
      </n-button>
      <n-button @click="add">
        account : {{ count }}
      </n-button>
    </n-space>

    <v-footer />
  </div>
</template>
