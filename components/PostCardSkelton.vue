<template>
    <div class="card">
        <img class="img" />
        <div class="description">
            <h4  class="title"></h4>
            <div class="tags-container">
                <span class="tag" ></span>
                <span class="tag" ></span>
            </div>
    </div>

    </div>
</template>

<style scoped>
.card{
    background: #FFFFFF;
    display: flex;
    margin: .5rem;
    padding: .5rem;
    border-radius:10px;
    width: 330px;
    height: 100px;
    .img{
      width: 100px;
      height: 100px;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: #eee;
      animation: pulse-bg 1s infinite;


    }
    .description{
      width: 200px;
      height: 80px;
      background-color: #eee;
      margin: 1rem 0; 
      border-radius: 1rem;
      /* animation: pulse-bg 1s infinite; */
      .title{
        height: 1rem;
        width: 12rem;
        margin:  1rem;
        background-color: darkgrey;
        animation: pulse-bg 1s infinite;

      }
      .tags-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        gap: 1rem;

      }
      .tag{
            background: white;
            border: 1px solid rgba(244,208,82,0.2);
            border-radius: 10px;
            padding: 0 1rem;
            width: 2rem;
            height: 1rem;
            animation: pulse-bg 1s infinite;

        }
    }
  }

@keyframes pulse-bg {
  0% {
    background-color: #eee;
    left: 0;

  }
  50% {
    background-color: lightgray;
    left: 100%;

  }
  100% {
    background-color: #eee;
    left: 0;

  }
}

</style>