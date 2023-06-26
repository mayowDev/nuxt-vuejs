<template>
    <section class="posts">      
        <h3 class="title">Latest</h3>
        <div v-for="post of data" class="post">
          <PostCard :post="post" :tagNames="tagNames" :images="images"/>
        </div>
    </section>  
  
</template>
<script  setup>
import PostCard from './PostCard.vue';

    const runtimeConfig = useRuntimeConfig()
    let imagesUrl = runtimeConfig.public.imagesUrl 
    const tagArray  = []
    const {data}  = await useFetch(`/api/posts`)

    data._value.map( item=>{item.tags.map( tag=>tagArray.push(tag))})
    const images = data._value.map(item=>{
        let url =  item.link
        let imgPath =  url.slice(21, -1)
        let datePart = imgPath.slice(0, 8);
        let result = imgPath.substring(8);
        let splittedResult= result.split("-")
        let capitalized  = splittedResult.map(item=> item.charAt(0).toUpperCase() + item.slice(1))
        let myy= capitalized.join(",")
        let pattern = /,/g;
        let replacement = "-";
        let capitalizedImageName = myy.replace(pattern, replacement)
        let finalPath = datePart + capitalizedImageName
        let id = item.featured_media
        let img = {id, src: `${imagesUrl}${finalPath}.jpg`}
        return  img
    })   
    const {data:tagNames}  = await useFetch('/api/tags',{ method: 'post', body:{tagArray}})
</script>

<style lang="scss" scoped>
.title{
    font-size: 14px;
    color: #595959;
    margin: 1rem;
  }

</style>