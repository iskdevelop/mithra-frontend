
<template>
     <div class="index bg-[--background] h-[100vh] w-full flex flex-row justify-center relative">
          <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
               <source src="@/public/background.mp4" type="video/mp4"/>
               Your browser does not support the video tag.
          </video>
          <!-- Added gradient overlay -->
          <div class="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/80"></div>
          <div class="content relative z-10 flex flex-row w-full h-full items-center ">
               <div class="flex justify-center items-center  text-[--text-white] w-full   ">
                    <!-- Added animation classes -->
                    <div class="flex flex-row items-baseline gap-16px">
                         <h1 class="fluid-display-04 ">Mithra</h1>
                         <h2 class="fluid-paragraph-01  ">Blackboard of the Internet.</h2>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.index {
     position: relative;
     overflow: hidden;
}



</style>
