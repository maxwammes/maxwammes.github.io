<script setup>
import { RouterView } from 'vue-router'
import ProgressiveBlur from './components/ProgressiveBlur.vue'
import ProjectSelector from './components/ProjectSelector.vue'
</script>

<template>
  <RouterView />
  <ProgressiveBlur position="top" />
  <ProgressiveBlur position="bottom" />
  <ProjectSelector />
</template>
