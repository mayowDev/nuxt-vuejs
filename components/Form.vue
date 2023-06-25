<template>
     <form  @submit.prevent="() => handleSubmit()">
        <Input
            :class="'input'"  
            :id="'email'" 
            :inputType="'email'" 
            :placeholder="'Email address'" 
            :labelText="'Enter Your Email Address'"
            :inputValue="'email'"      
      />
      <Input
            :class="'input'"  
            :id="'email'" 
            :inputType="'password'" 
            :placeholder="'Password'" 
            :labelText="'Enter Your Password'"
            :inputValue="'password'"      
      />
    
    </form>
   
</template>

<script setup>
import Input from './Input.vue';

const {  className, labelText, inputValue, handleSubmit} = defineProps([
    'handleSubmit', 'id', 'className', 'placeholder', 'labelText', 'inputValue'
])


</script>


<style lang="scss" scoped>

</style>