<script>
import Vue from 'vue';
import { W3cVueSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    W3cVueSample,
  }
});
</script>

<template>
  <div id="app">
    <w3c-vue-sample />
  </div>
</template>
