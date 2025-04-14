<template>
     <div class="flex flex-col gap-12px  w-ful h-full justify-center items-start text-nowrap group  nu-transition-productive-standard-fast-02">
          <div
              class="text-[--text-primary] items-center flex flex-row body-02 hover:text-[--link-primary-hover]  h-24px
     gap-8px hover:gap-16px  cursor-pointer  nu-transition-productive-standard-fast-02
          ">
               <slot/>
          </div>
          <div class="text-[--text-placeholder] group-hover:text-white label-02  nu-transition-productive-standard-fast-02">
               {{ description}}
          </div>
     </div>
</template>
<script setup lang="ts">
const props = defineProps<{
     description: string
}>()
</script>

<style scoped lang="scss">

</style>