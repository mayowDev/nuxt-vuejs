<script setup>

import { ref } from 'vue'
import Form from '~/components/Form.vue';
import Input from '~/components/Input.vue';
import Button from '~/components/Button.vue';

// state
const email = ref('')
const password = ref('')
const isError = ref(false)
const errorMessage = ref('')

const client = useSupabaseClient()

// actions
const handleLogin = async () => {
  try {
    const { user, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    console.log('signin result', user,' error', error)
    email.value = '';
    password.value = '';
  } catch (error) {
    console.log('catched error', error.message)
    isError.value = true
    errorMessage.value = error.message;
    setTimeout(() => {
        errorMessage.value = '';
    }, 3000);
  }

}


const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
})


</script>

<!-- view -->
<template>
  <section class="login-page">
    <div class="title-box">
      
      <h2>
        <img src="@/assets/sausage-vector.png" class="sausage"  alt="sausage-icon"/>
       <span>Nairobi Sauages</span> 
      </h2>

    </div>
    <form  @submit.prevent="() => handleLogin()">
      <Input
            :class="'input'"  
            :name="'email'" 
            :id="'email'" 
            :type="'email'" 
            :placeholder="'Email address'" 
            :labelText="'Enter Your Email Address'"
            v-model="email"
      />
      <Input
            :class="'input'"  
            :name="'password'" 
            :id="'password'" 
            :type="'password'" 
            :placeholder="'Password'" 
            :labelText="'Enter Your Password'"
            v-model="password"
      />
      <p class="error" v-if="isError">{{ errorMessage }}</p>
      <Button :type="'submit'" :className="'login-btn'" :text="'Login'"/>
    </form>
    <div class="instructions">
      <span > Dont Have an account? <NuxtLink to="/register">Register</NuxtLink></span>
      <NuxtLink to="/login">Forgot Password</NuxtLink> 
    </div>
      

  </section>
</template>


<style lang="scss" scoped>
 .login-page{
    background-image: url('../assets/auth-background.png');
    background-repeat: no-repeat;
    margin-left: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    min-height: 650px;

    .title-box{
      margin-top: 8rem;
      width: 95px;
      font-size: 22px;
      font-weight: bold;
      font-family: Georgia, serif;
      text-align: center;
     
      h2{
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0px 5px 2px rgba(0,0,0,0.26);
        .sausage{
          width:42px; 
          height:42px;
          margin-right: -1.5rem;
          position: sticky;
          align-self: baseline;
          z-index: 4;

      }
      }

    }
    form{
      display: flex;
      flex-direction: column;
      min-width: 310px;
      min-height: 175px;
    }
    .instructions{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      padding-bottom: 1rem;
      a{
        color: rgba(81, 113, 72, 1);
        margin-top: .5rem;
      }

    }
  .error{color: red; font-size: 1rem; text-align: center;}
 } 

</style>
