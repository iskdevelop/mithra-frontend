<template>
     <NuxtLink :to="link">
          <div
              class="w-full h-full flex flex-row gap-32px p-16px select-none
         text-nowrap hover:text-[--text-black] hover:bg-[--layer-01] text-[--text-white]
         nu-transition-productive-entrance-moderate-01 active:bg-[--layer-02] items-center
">
               {{ text }}
          </div>
     </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
     text: String,
     link: String
}>()
</script>
<style scoped lang="scss">

</style>