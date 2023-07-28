<script setup lang="ts">
import { useMessage } from 'naive-ui'

const message = useMessage()
const num = ref(0)

function add() {
  num.value++
  message.success(`total : ${num.value}`)
}
</script>

<template>
  <div class="flex-center h-full flex-col gap-2em">
    <img src="/favicon.svg" class="w-16em">
    <span class="text-3xl">Welcome to Virtuoso</span>
    <span>Template baseed on Vue3, Vite4, Unocss</span>

    <a href="https://github.com/chansee97/virtuoso" class="c-emerald-500 hover:underline">Github Repo</a>

    <n-button type="primary" @click="add">
      account:{{ num }}
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
