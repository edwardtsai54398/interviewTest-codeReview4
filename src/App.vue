<script setup>
import GDBSwitch from './components/GDBSwitch.vue'
import {ref} from 'vue'

const switch2Val =  ref(true)

</script>

<template>
  <GDBSwitch :disabled="true" :label="'星期一'"/>
  <GDBSwitch :modelValue="switch2Val" @update:modelValue="switch2Val = $event" :label="'星期二'"/>
</template>

<style scoped>

</style>
