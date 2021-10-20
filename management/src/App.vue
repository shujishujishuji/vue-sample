<template>
  <div>
    <HelloWorld/>
    <router-view/>
    <p>msg = {{ msg }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  computed: {
    msg(){
      return this.$route.path
    }
  },
  components: {
    HelloWorld,
  }
}
</script>

<style>
</style>