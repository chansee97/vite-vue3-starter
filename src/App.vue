<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { dateZhCN, zhCN } from 'naive-ui'

const locale = zhCN
const dateLocale = dateZhCN

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4EB88A',
  },
}
</script>

<template>
  <n-message-provider>
    <n-config-provider wh-full :theme="null" :locale="locale" :date-locale="dateLocale" :theme-overrides="themeOverrides">
      <router-view />
    </n-config-provider>
  </n-message-provider>
</template>
