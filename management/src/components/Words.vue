<template>
<div>
    <p>msg = {{ msg[0]["home"]["msg"]}}</p>
</div>
</template>

<script>
import hospital from '../assets/hospital.json'
import mec from '../assets/mec.json'

export default {
  name: 'Words',
  computed: {
       msg(){
           if(this.$route.path === "/"){
               return hospital
           } else {
               return mec
           }
    }
  }
}
</script>