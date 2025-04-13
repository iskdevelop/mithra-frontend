<template>
     <div class="nu-color text-[--text-primary]" :data-theme="theme">
          <NuxtLayout>
               <NuxtPage/>
          </NuxtLayout>
     </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
const theme = ref('gray100')
</script>
<style lang="scss">
@import 'assets/style/color/color.scss';
@import 'assets/style/transition/transition.scss';
@include generate-theme-colors();
@include generate-transformations();
</style>
