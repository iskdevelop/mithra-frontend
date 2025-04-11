<template>
     <div class="nu-color text-[--text-primary]" :data-theme="theme">
          <NuxtLayout>
               <NuxtPage class=""/>
          </NuxtLayout>
     </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const theme = ref('white')
</script>
<style lang="scss">
@import 'assets/style/color/color.scss';
@import 'assets/style/transition/transition.scss';
@include generate-theme-colors();
@include generate-transformations();
</style>
