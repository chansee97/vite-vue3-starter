<script setup lang="ts">
import { fetachDelete, fetachGet, fetachPost, fetachPut } from '@/service/api'

const msg = ref<any>('No Data Yet')
const pinterEnv = () => {
  msg.value = import.meta.env
}
const get = () => {
  fetachGet().then((res) => {
    msg.value = res
  })
}
const _delete = () => {
  fetachDelete().then((res) => {
    msg.value = res
  })
}
const post = () => {
  const params = {
    data: '2022-2-2',
  }
  fetachPost(params).then((res) => {
    msg.value = res
  })
}
const put = () => {
  const params = {
    data: '2022-2-2',
  }
  fetachPut(params).then((res) => {
    msg.value = res
  })
}
</script>

<template>
  <div class="h-full flex-col-center gap-1em">
    <div class="text-3xl">
      Here is an example of Axios usage
    </div>

    <n-space justify="center">
      <n-button @click="pinterEnv">
        env
      </n-button>
      <n-button @click="get">
        get
      </n-button>
      <n-button @click="post">
        post
      </n-button>
      <n-button @click="_delete">
        delete
      </n-button>
      <n-button @click="put">
        put
      </n-button>
    </n-space>
    <n-alert type="info">
      Web request to open the console to view
    </n-alert>

    <pre class="bg-zinc-200:40 min-w-32em b-rd-3 p-1em max-h-16em overflow-y-auto">{{ msg }}</pre>

    <v-footer />
  </div>
</template>
