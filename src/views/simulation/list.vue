<template>
  <div>
    <a-statistic title="专用车位" :precision="2" :value="zhuan" style="margin-right: 50px" />
    <a-statistic title="普通车位" :precision="2" :value="pu" />
  </div>
</template>
<script>
export default {
  name:'list',
  props:{
    zhuan:{
      type:Number,
      default(){
        return
      }
    },
    pu:{
      type:Number,
      default(){
        return
      }
    }
  }
  }
</script>
