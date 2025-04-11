<script setup lang="ts">

import Logo from "~/components/nav/Logo.vue";
</script>

<template>
     <div class="flex flex-row justify-between items-center   p-0 h-64px">
          <Logo/>
          <div class="nav-buttons flex flex-row gap-0 h-full">
               <NavButton>
                    Home
               </NavButton>
               <NavButton>
                    Docs
               </NavButton>
               <NavButton>
                    About
               </NavButton>
               <NavButton>
                    Contact
               </NavButton>
               <NavButton>
                    Contribute
               </NavButton>

          </div>
          <div class="nav-auth-buttons flex flex-row gap-0 h-full pr-[112px]">
               <NavButton>
                    Login
               </NavButton>
               <NavButton>
                    Sign Up
               </NavButton>
          </div>
     </div>
</template>

<style scoped lang="scss">

</style>