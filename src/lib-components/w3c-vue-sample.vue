<script>

import W3cTable from './w3c-table/index.vue';

export default {
  name: 'W3cVueSample', // vue component name
  components:{
    W3cTable
  },
  data() {
    return {
      columns: ["First Name", "Last Name", "Points"],
      data:[
          {'first_name':'a', 'last_name':'b', 'points':10},
          {'first_name':'aa', 'last_name':'bb', 'points':20},
          {'first_name':'aaa', 'last_name':'bbb', 'points':30},
          {'first_name':'aaaa', 'last_name':'bbbb', 'points':40},
          {'first_name':'aaaaa', 'last_name':'bbbbb', 'points':50},
      ],
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    };
  },
  computed: {
    changedBy() {
      const { message } = this;
      if (!message.action) return 'initialized';
      return this.setMessage();
    },
  },
  methods: {
    setMessage(){
      
        return this.message.action ;
    },
    increment(arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement(arg) {
      const amount = (typeof arg !== 'number') ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    },
  },
};
</script>

<template>
<div>
  <div class="table">
      <W3cTable :columns="columns" :data="data" />
  </div>
  <div class="w3c-vue-sample w3-panel w3-red">
    <p>The counter was {{ changedBy }} to <b>{{ counter }}</b>.</p>
    <button class="w3-button w3-yellow" @click="increment">
      Click +1
    </button>
    <button class="w3-button w3-yellow" @click="decrement">
      Click -1
    </button>
    <button class="w3-button w3-yellow" @click="increment(5)">
      Click +5
    </button>
    <button class="w3-button w3-yellow" @click="decrement(5)">
      Click -5
    </button>
    <button class="w3-button w3-yellow" @click="reset">
      Resetto
    </button>
  </div>
  </div>
</template>

<style scoped>
  .w3c-vue-sample {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .w3c-vue-sample p {
    margin: 0 0 1em;
  }
</style>
