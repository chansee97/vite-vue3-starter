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
    <pre class="bg-zinc-200 w-30em b-rd-3 p-1em min-h-16em">{{ msg }}</pre>

    <v-footer />
  </div>
</template>
