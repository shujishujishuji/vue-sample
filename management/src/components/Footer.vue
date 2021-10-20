<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Footer-Bar',
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