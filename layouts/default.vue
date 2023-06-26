<template>
      <!--  shared header if user is logedIn -->
      <header :class="{white: pathName ==='submit',light: pathName ==='index'}"
         v-if="showHeader">
        <TheNavbar /> 
      </header>

      <!--  pages content here -->
        <slot />
  </template>

<script setup>
  const router = useRouter();
  const pathName= usePath()
  const showHeader =  router.currentRoute.value.fullPath === '/login' || router.currentRoute.value.fullPath === '/register' ? false : true;

</script>

<style lang="scss" scoped>
.white{
  background: white;
  padding-top: .5rem;
  margin-bottom: -1rem;//to hide the gap
}
.light{
  padding-top: .5rem;
  background: #EDEAE7;
  margin-bottom: -1rem;//to hide the gap

}

</style>

