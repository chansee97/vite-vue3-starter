<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useStore } from '@/store'

const router = useRouter()
const message = useMessage()
const { count } = storeToRefs(useStore())

const name = ref()

function add() {
  count.value++
  message.success(`total : ${count.value}`)
}

function ToHiPage() {
  router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="flex-center h-full flex-col gap-2em">
    <v-cover />

    <n-space>
      <n-input v-model:value="name" type="text" placeholder="Enter your name" />
      <n-button type="primary" :disabled="!name" @click="ToHiPage">
        Go
      </n-button>
      <n-button @click="add">
        account : {{ count }}
      </n-button>
    </n-space>

    <v-footer />
  </div>
</template>
