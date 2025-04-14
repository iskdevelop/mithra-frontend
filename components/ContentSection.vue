
<template>
     <div class="flex
     data-[orientation=vertical]:flex-col
     data-[orientation=horizontal]:flex-row
     gap-16px
     text-[--text-on-color]
     hover:text-[--text-primary]
     bg-[--background]
     hover:bg-[--background]
      justify-center
     h-full w-full
     nu-transition-expressive-standard-moderate-02
     xs:p-8px sm:p-16px md:p-32px lg:p-64px xl:p-96px"
     data-orientation="vertical">
          <slot/>
     </div>
</template>
<script setup lang="ts">
const props = defineProps<{
     title: string
     description: string
     orientation: 'horizontal' | 'vertical'
}>()
</script>

<style scoped lang="scss">

</style>
