<template>
     <div class="nu-color bg-[--background] text-[--text-primary] w-full h-full" :data-theme="theme">
          <NuxtLayout>
               <NuxtPage class="h-full"/>
          </NuxtLayout>
     </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const theme = ref('gray100')
</script>
<style lang="scss">
@import 'assets/style/color/color.scss';
@include generate-theme-colors();
</style>
