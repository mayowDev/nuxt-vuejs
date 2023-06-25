<template>
    <div class="card">
        <div v-for="img of images" class="img-container">
            <img v-if=" post.featured_media === img.id"  :src="img.src" class="img" />
        </div>
        <div class="description">
          <h4  class="title">{{post.title.rendered}}</h4>
          <span v-for="tag of post.tags" >
            <span v-for="t of tagNames" >
                <span class="tags" v-if=" t.id === tag" >  {{ t.name }}</span>
            </span>
        </span>
    </div>

    </div>
</template>

<script setup>
const {post, tagNames, images} = defineProps(['post', 'tagNames', 'images'])
</script>

<style lang="scss" scoped>

.card{
    background: #FFFFFF;
    display: flex;
    margin: .5rem;
    padding: .5rem;
    border-radius:10px;
    width: 330px;
    height: 100px;
    .img{
      width: 120px;
      height: 80px;
      margin-right: 1rem;
      border-radius: 5px;
    }
    .description{
      width: 45vw;
      .title{
        font-size: 15px;
        font-weight: 600;
        word-break: break-all;
        // word-wrap: break-word;
      }
      .tags{
            display: inline-block;
            border: 1px solid rgba(244,208,82,0.2);
            padding: 0 .9rem 0 .7rem;
            max-width: 50px;
            border-radius:10px;
            margin: .2rem;
            background-color:rgba(244,208,82,0.2);
            text-overflow: ellipsis;
            font-size: 12px;

            .empty{display: none; visibility: hidden;}
        }
    }
  }

</style>