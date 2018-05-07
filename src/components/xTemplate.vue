<script type="text/x-template" id="cdogID">
    <li>{{ name }}</li>
</script>

<template lang="html">
  <div class="uivWrap">
    <button-counter></button-counter>
    <c-cat></c-cat>
    <c-dog></c-dog>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('c-cat', {
  data() {
    return {
      name: 'cat'
    }
  },
  template: '<div>Hello {{name}}</div>'
})

const cdog = {
  name: 'c-dog',
  template: '#cdogID',
  data() {
      return {
          name: 'dog'
      }
  }
}
Vue.component('c-dog', cdog)

export default {
  
};

</script>

<style lang="scss" scoped>

.uivWrap {
    margin: 0 auto;
    width: 960px;
    padding: 20px;
}

</style>