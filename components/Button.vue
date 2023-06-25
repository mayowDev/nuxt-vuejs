<template>
    <button :type="props.type" :class="props.className">
        {{ props.text }}
    </button>
</template>

<script setup>
const props = defineProps(['type', 'className', 'text'])

</script>

<style lang="scss" scoped>

.login-btn, .submit-btn{
    background-color: #212427;
    color: #EEEEEE;
    border: none;
    border-radius:2rem ;
    width: 310px;
    min-height: 50px;
    margin: 1.5rem 0;
    font-weight: bold;
    cursor: pointer;
}

</style>