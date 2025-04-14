<template>
     <div
         class="flex flex-col h-[300vh] w-full bg-[--background] ">
          <div class="w-full h-full flex xs:flex-col-reverse lg:flex-row">
               <AboutFirstSection/>
               <div class="xs:p-4px  md:p-16px lg:p-32px mx:p-96px w-full h-full  ">
                    <div class="w-full h-full bg-cover bg-[url('@/public/section-one-background.jpg')]"/>
               </div>
          </div>
          <div class="w-full h-full flex xs:flex-col lg:flex-row">
               <div class="xs:p-4px  md:p-16px lg:p-32px mx:p-96px w-full h-full ">
                    <div class="w-full h-full bg-cover bg-[url('@/public/section-two-background.jpg')]"/>
               </div>
               <AboutSecondSection/>
          </div>
          <div class="w-full h-full flex xs:flex-col-reverse lg:flex-row">
               <AboutThirdSection/>
               <div class="xs:p-4px  md:p-16px lg:p-32px mx:p-96px w-full h-full ">
                    <div class=" w-full h-full  bg-cover bg-[url('@/public/section-three-background.jpg')]"/>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">

</style>