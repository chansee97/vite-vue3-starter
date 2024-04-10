<script setup lang="ts">
const msg = ref<any>('No Data Yet')
function pinterEnv() {
  msg.value = import.meta.env
}
function get() {
  fetchGet().then((res) => {
    msg.value = res
  })
}
function _delete() {
  fetchDelete().then((res) => {
    msg.value = res
  })
}
function post() {
  const params = {
    data: '2022-2-2',
    type: 'post',
  }
  fetchPost(params).then((res) => {
    msg.value = res
  })
}

function postForm() {
  const params = {
    data: '2022-2-2',
    type: 'postForm',
  }
  fetchPostForm(params).then((res) => {
    msg.value = res
  })
}

function put() {
  const params = {
    data: '2022-2-2',
  }
  fetchPut(params).then((res) => {
    msg.value = res
  })
}
</script>

<template>
  <div class="h-full flex-col-center gap-1em">
    <div class="text-3xl">
      Here is an example of Axios usage
    </div>

    <div class="flex gap-sm">
      <button @click="pinterEnv">
        env
      </button>
      <button @click="get">
        get
      </button>
      <button @click="post">
        post
      </button>
      <button @click="postForm">
        postForm
      </button>
      <button @click="_delete">
        delete
      </button>
      <button @click="put">
        put
      </button>
    </div>
    <span>
      Web request to open the console to view
    </span>

    <pre class="bg-zinc-200:40 min-w-32em b-rd-3 p-1em max-h-16em overflow-y-auto">{{ msg }}</pre>

    <v-footer />
  </div>
</template>
