<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      msg: 'Hello phospital',
    };
  },
  created() {
    const webpack_babel = 'Babel check';
    console.log(webpack_babel);
  },
};
</script>
<style scoped>
.example{
  font-weight: bold;
}
</style>