<template>
     <div class="input-container">
        <label :for="id"  class="label" >{{ labelText }}</label>
        <input  
            :class="className"  
            :id="id" 
            :type=type
            :name="name" 
            :placeholder="placeholder" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value) "
          />

    </div>
</template>

<script >

export default {
    props: {
        className:{
            type: String,
            required: false,
            default: ""
        },
        id:{
            type: String,
            required: false,
            default: ""
        },
        type:{
            type: String,
            required: true,
            default: ""

        },
        name: {
            type: String,
            required: true,
            default: ""

        },
        placeholder: {
            type: String,
            required: false,
            default: ""
        },
        modelValue: {
            type: [String, Number],
            default:''
        },
        labelText:{
            type: String,
            required: true,
            default: ""
        }

    }
}
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