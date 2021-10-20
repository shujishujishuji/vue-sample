<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Header-Bar',
    };
  },
  created() {
    const webpack_babel = 'Babel check';
    console.log(webpack_babel);
  },
};
</script>
<style>

</style>