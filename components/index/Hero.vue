<script setup lang="ts">

</script>

<template>
     <div class="index bg-[--background] h-[100vh] w-full flex flex-row justify-center relative">
          <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
               <source src="@/public/background.mp4" type="video/mp4"/>
               Your browser does not support the video tag.
          </video>
          <div class="content relative z-10 flex flex-col   w-full h-full">
               <NavBar/>
               <div class="flex flex-row h-full items-end">
                    <div class="mx:h-full w-full flex items-end mx-64px ">
                         <div class="flex flex-col bg-[--background-black] gap-16px
                         lg:h-fit px-48px py-64px
">
                              <h1 class="fluid-display-04 text-[--text-white]">Mithra</h1>
                              <p class="fluid-paragraph-01 text-[--text-white]">
                                   Knowledge deserves to be seen, shared,
                                   and shaped. Mithra is the ultimate collaboration and presentation tool, empowering
                                   minds across the globe to bring ideas to life.
                              </p>
                              <p class="legal-01 text-[--text-white]">All rights reserved for Independent Society of Knowledge</p>
                         </div>
                    </div>
                    <div class="h-full w-full"/>

               </div>
          </div>
     </div>
</template>

<style scoped lang="scss">
.index {
     position: relative;
     overflow: hidden;
}

</style>