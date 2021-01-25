<script>
import W3cButton from './button/index.vue'
import W3cIcon from './icon/index.vue'
import W3c  from './input/index.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  name: 'W3cVueSample', // vue component name
  components:{
    W3cIcon,
    W3cButton
  },
  data() {
    return {
      isLoading: true,
      number : 0
    };
  },
  computed: {
 

  },
  methods: {
    setLoading (){

      this.isLoading ? this.isLoading = true : false;

      console.log(this.isLoading, this.number)

    }
  },
};
</script>

<template>
<div>
   <w3c-button  class="w3-black"   label="Primary"  ></w3c-button>
   <w3c-button  class="w3-black"   label="Primary"  ></w3c-button>
   <w3c-button  class="w3-yellow"  label="yellow"  ></w3c-button>
   <w3c-button  class="w3-red"     label="red"  ></w3c-button>
   <w3c-button  @click="setLoading"  
                class="w3-red"  
                icon-left="fas fa-spinner" 
                :loading="isLoading" ></w3c-button>
   <hr>


</div>
</template>

<style scoped>
.buttonload {
  background-color: #4CAF50; /* Green background */
  border: none; /* Remove borders */
  color: white; /* White text */
}
</style>
