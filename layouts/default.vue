<template>
      <!--  shared header if user is logedIn -->
      <header 
        :class="{white: pathName ==='submit',light: pathName ==='index'}"
         v-if="showHeader">
        <TheNavbar /> 
      </header>

      <!--  pages content here -->
        <slot />
      <!-- <TheFooter /> -->
  </template>

<script setup>
  const router = useRouter();
  const showHeader =  router.currentRoute.value.fullPath === '/login' ? false : true;

  const pathName = router.currentRoute.value.name 

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

