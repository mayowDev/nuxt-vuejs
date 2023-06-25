<script  setup>

import PostCard from '~/components/PostCard.vue';

  const runtimeConfig = useRuntimeConfig()
  let baseUrl = runtimeConfig.public.apiBase
  let imagesUrl = runtimeConfig.public.imagesUrl 

  const postsArguments = '&_fields=id,title,featured_media,link,tags'
  const tagsArgument =  '&_fields=id,name'

  const tagArray  = []
  const {data}  = await useFetch(baseUrl + 'posts?per_page=5' +postsArguments)
  data._value.map( item=>{item.tags.map( tag=>tagArray.push(tag))})

  const images = data._value.map(item=>{
      // example of url = https://noblepig.com/2023/06/lemon-cornmeal-cake/
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

   const {data:tagNames} =  await useFetch(baseUrl+ 'tags?include=' + tagArray + tagsArgument)
  const router = useRouter()
  const handleSell = ()=>{
    router.push('/submit')
  }
</script>

<template>
  <div class="dashboardPage">
    <section class="dashboard">
      <h3 class="title">Dashboard</h3>
      <div class="action-boxes">
        <div class="box">
          <span class="box-title">Farms</span>
          <div class="box-item">
            <div class="number">2</div>
            <span class="text">Kiambu County</span>
          </div>
          <button class="btn order">Order Feeds</button>
        </div>
        <div class="box">
          <span class="box-title">Pigs</span>
          <div class="box-item">
            <div class="number">36</div>
            <span class="text">large White</span>
          </div>
          <button @click="handleSell" class="btn sell">Sell a Batch</button>
        </div>
        
      </div>
    </section>
    <section class="posts">      
      <h3 class="title">Latest</h3>
      <div v-for="post of data" class="post">
          <PostCard :post="post" :tagNames="tagNames" :images="images"/>
      </div>
    </section>  
  </div>
  
</template>


<style lang="scss" scoped>
.dashboardPage{
  background-color: #EDEAE7;
  padding-top: 1rem;
}
.posts, .dashboard{
  .title{
    font-size: 14px;
    color: #595959;
    margin: 1rem;
  }
  .action-boxes{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem;
    .box{
      background-color: white;
      width: 160px;
      height: 120px;
      padding: 0 1rem;
      .box-title{font-size: 12px; color: #517148};
      .box-item{
        background-color: white;
        display: flex;
        align-items: center;
        margin: .5rem 0;
        .number{
          background-color: white;

          display: inline-block;
          padding: 0 10px;
          font-weight: bold;
          font-size: 28px;
          margin-right: 1rem;
          // &:after {
          //   content: "|";
          //   background: lightgray;
          //   position: absolute;
          //   top: 20%;
          //   height: 3%;
          //   width: 2px;
          //   margin-left: .5rem;

          // }
          border-right: 1px solid lightgray;
          
        }
    
        .text {
          font-size: 14px;
          text-align: center;
          max-width: 10px;
          text-transform: capitalize !important;
        }
      }
      .btn{
        width: 130px;
        height: 32px;
        border-radius:20px ;
        border: none;
        font-weight: bold;
        cursor: pointer;
      }
      .order{
       background-color: rgba(243, 208, 82, 1); 
      }
      .sell{background-color: #517148; color: white;}
    }
  }
  
  

}
</style>