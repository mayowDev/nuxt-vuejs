<template>
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
</template>

<script setup>
    const router = useRouter()
    const handleSell = ()=>{router.push('/submit')}

</script>

<style lang="scss" scoped>

.dashboard{
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