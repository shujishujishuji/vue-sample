<template>
  <div class="hello">
  <h1>{{ msg }}</h1>
  <Example/>
  </div>
</template>

<script>
import Example from './example.vue'

export default {
  components: { Example },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to App'
    }
  }
}
</script>

<style scoped>
</style>