<script setup lang="ts">

import Logo from "~/components/nav/Logo.vue";
</script>

<template>
     <div class="flex flex-row
     bg-[--background-black]
     w-full
     justify-between  pl-32px pr-64px py-32px h-64px
     items-center nu-transition-productive-standard-moderate-01">
          <Logo/>
          <div class="flex flex-row gap-0 ">
               <NavButton link="/">Home</NavButton>
               <NavButton link="/about">About</NavButton>
               <NavButton link="/contact">Contact</NavButton>
               <NavButton link="/docs">Docs</NavButton>
               <NavButton link="/contribute">Contribute</NavButton>
          </div>
          <div class=" flex flex-row gap-0  ">
               <NavButton link="/auth/login">Log in</NavButton>
               <NavButton link="/auth/signup">Sign up</NavButton>
          </div>
     </div>
</template>

<style scoped lang="scss">

</style>