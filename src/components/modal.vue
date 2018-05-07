<template lang="html">
  <div style="margin: 0 auto; width: 960px;padding: 20px;">
    <modal name="hello-world" @before-open="beforeOpen">
      hello, world!
      <button type="button" name="button" @click='hide'>hide</button>
    </modal>
    <button type="button" name="button" @click='show'>show</button>

    <v-dialog/>
    <button type="button" name="button" @click='showDialog'>showDialog</button>

    <modals-container/>
    <button type="button" name="button" @click='showDynamic'>showDynamic</button>
    <button type="button" name="button" @click='showDynamic2'>showDynamic2</button>
  </div>

</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'
import MyComponent from '@/components/modalTemplate.vue'

export default {
  methods: {
    show() {
      this.$modal.show('hello-world', { foo: 'bar' });
    },
    hide() {
      this.$modal.hide('hello-world');
    },
    beforeOpen(event) {
      console.log(event.params.foo);
    },
    showDialog() {
      this.$modal.show('dialog', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
       ]
      })
    },
    showDynamic() {
      this.$modal.show({
        template: `
          <div>
            <h1>This is created inline</h1>
            <p>{{ text }}</p>
          </div>
        `,
        props: ['text']
      }, {
        text: 'This text is passed as a property'
      }, {
        height: 'auto'
      }, {
        'before-close': (event) => { console.log('this will be called before the modal closes'); }
      })
    },
    showDynamic2() {
      this.$modal.show(MyComponent, {
        text: 'This text is passed as a property'
      }, {
        draggable: true
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
