<template>
     <div class="input-container">
        <label :for="id"  class="label" >{{ labelText }}</label>
        <input 
            :class="props.className"  
            :id="props.id" 
            :type="props.inputType" 
            :placeholder="props.placeholder" 
            v-model="props.inputValue"/>

    </div>
</template>

<script setup>

const props = defineProps([
    'inputType', 'id', 'className', 'placeholder', 'labelText', 'inputValue'
])


</script>

<style lang="scss" scoped>
.input-container{
        display: flex;
        flex-direction: column;
        height: 72px;
        margin: 1.25rem 0;
        label{
          font-size: 14px !important;
          color: #1C1B1F;
          margin: .5rem 0;
        }
        input{
          max-height: 50px;
          background-color: #EEEEEE;
          border: none;
          border-radius: 5px;
          padding: 1rem .5rem;
          &:focus{ outline: none;}
        }
    }

</style>