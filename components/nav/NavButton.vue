<template>
     <NuxtLink :to="link">
          <div
              class="
              w-full h-full
              flex flex-row
              gap-32px p-8px
              select-none text-nowrap
              nu-transition-productive-standard-moderate-01

"
              :class="isActive ? 'text-[--text-brand] ' : 'text-[--text-white] hover:text-[--text-brand]'"
          >
               <slot/>
          </div>
     </NuxtLink>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'

const props = defineProps<{
     link: String
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.link)
</script>

<style scoped lang="scss">

</style>