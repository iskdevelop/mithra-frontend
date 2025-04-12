<script setup lang="ts">

import Logo from "~/components/nav/Logo.vue";
</script>

<template>
     <div class="flex flex-row justify-between items-center px-32px h-64px">
          <Logo/>
          <div class="nav-buttons flex flex-row gap-0 h-full">
               <NavButton
                   text="Home"
                   link="/"
               />
               <NavButton
                   text="About"
                   link="/about"
               />
               <NavButton
                   text="contact"
                   link="/contact"
               />
               <NavButton
                   text="docs"
                   link="/docs"
               />
               <NavButton
                   text="contribute"
                   link="/contribute"
               />
          </div>
          <div class="nav-auth-buttons flex flex-row gap-0 h-full ">
               <NavButton
                   text="Sign In"
                   link="/auth/login"
               />
               <NavButton
                   text="Sign Up"
                   link="/auth/signup"
               />
          </div>
     </div>
</template>

<style scoped lang="scss">

</style>