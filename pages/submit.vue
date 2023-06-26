<script setup>
import { ref } from 'vue'
import Button from '~/components/Button.vue';
// state
const breed = ref('Large white')
const averageWeight =   ref('')
const age =   ref('')
const price =   ref('')

const minRange =   ref(0)
const maxRange =   ref(36)
const rangeValue =   ref(0)



const pigDetails = {
    breed,
    age,
    averageWeight
}

// actions
async function submitForm() {
  const {data } = await useFetch('/api', {
    method:'post',
    body:pigDetails

  })
}

// const user = useSupabaseUser()
// onMounted(() => {
//   watchEffect(() => {
//     if (!user.value) {
//       navigateTo('/login')
//     }
//   })
// })
</script>

<!-- view -->
<template>
  <main class="submitPage">
    <section class="range-section">
      <div class="range-values">
        <span class="range-text">Submit a Batch</span>
        <span class="range-value">{{ rangeValue }}</span>
      </div>
      <!-- <Input
            :class="'range-input input'"  
            :name="'range'" 
            :id="'range'" 
            :type="'range'" 
            :placeholder="'Email address'" 
            :labelText="''"
            v-model="rangeValue"
      /> -->
      <input class="range-input input"   type="range" :min="minRange" :max="maxRange" step="0" v-model="rangeValue"/> 
      <div class="range-limits">
        <span>{{ minRange }}</span>
        <span>{{ maxRange }}</span>
      </div>
    </section>

    <section class="option-section" >
      <label for="breeds"  class="label" >Breed</label>
      <select id="breeds" v-model="breed">
        <option >Large white</option>
        <option >Large black</option>
        <option >Middle white </option>
        <option >British Landrace</option>
        <option >American Landrace</option>
      </select>
    </section>
      <Input
            :class="' input'"  
            :name="'age'" 
            :id="'age'" 
            :type="'text'" 
            :placeholder="'6 months'" 
            :labelText="'Age'"
            v-model="age"
      />
      <Input
            :class="'input'"  
            :name="'average'"
            :id="'average'" 
            :type="'text'" 
            :placeholder="'120 Kgs'" 
            :labelText="'Average Weight '"
            v-model="averageWeight"      
      />
      <Input
            :class="'input'"  
            :name="'price'"
            :id="'price'" 
            :type="'text'" 
            :placeholder="'0.00'" 
            :labelText="'Ask price per pig '"
            v-model="price"      
      />
      <Button :type="'submit'" :className="'submit-btn'" :text="'Submit Request'"/>

  </main>
  
</template>

<style lang="scss" scoped>
.submitPage{
  padding: 0 1rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  background-color: white;
  section{
    margin-bottom: 1rem;
  }
  .range-text{font-size: 15px; color: #595959;}
  .range-value{color: #517148; font-weight: bold; font-size: 1.25rem;}
  .range-limits, .range-values{
    display: flex;
    justify-content: space-between;
    padding: .7rem;
  }
  .range-input{
    width: 310px;
  }

  select{
    margin-top: .5rem;
    // appearance: none;
    // -webkit-appearance: none;
  }
   
// select:after{
//       content: '<>';
//       font-size: 1rem ;
//       color: #333;
//       background-color: #333;
//       top: 18px;
//     }
 }


</style>
