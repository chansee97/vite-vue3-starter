<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useStore } from '@/store'

const message = useMessage()
const { count } = storeToRefs(useStore())

function add() {
  count.value++
  message.success(`total : ${count.value}`)
}
</script>

<template>
  <div class="flex-center h-full flex-col gap-2em">
    <img src="/favicon.svg" class="w-16em">
    <span class="text-3xl">Welcome to Virtuoso</span>
    <span>Template baseed on Vue3, Vite4, Unocss - <a
      href="https://github.com/chansee97/virtuoso"
      class="c-emerald-500 hover:underline"
    >Github Repo</a></span>

    <n-button type="primary" @click="add">
      account:{{ count }}
    </n-button>

    <n-space>
      <router-link to="/testNet">
        <n-button type="info">
          To test axios
        </n-button>
      </router-link>
      <router-link to="/hi">
        <n-button type="info">
          To other layout
        </n-button>
      </router-link>
    </n-space>
  </div>
</template>
