<template>
  <div class="dashboardPage">
    <Dashboard/>
    <Suspense>
      <template #default> 
        <Posts/>
      </template>
      <template #fallback>
        <PostCardSkelton/>
      </template>
    </Suspense>
  </div>
  
</template>
<script  setup>
// Home/Dashboard page
import Posts from '~/components/Posts.vue';
import PostCardSkelton from '~/components/PostCardSkelton.vue';
import Dashboard from '~/components/Dashboard.client.vue';
// const LazyPosts = defineAsyncComponent(()=>import('~/components/Posts.vue'))
</script>

<style lang="scss" scoped>
.dashboardPage{
  background-color: #EDEAE7;
  padding-top: 1rem;
}

</style>