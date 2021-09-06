<template>
  <div class="content">
      
      <!-- <tabbar></tabbar> -->
    <!-- <router-view></router-view> -->
    <!-- <h2>1</h2> -->
    <input placeholder="车牌号" class="input" value="" id="pai"/>
    <div>
      <model class="btn" @jinClick="jinClick" @chuClick="chuClick"></model>
    </div>
    
    <list class="list" :pu="pu" :zhuan="zhuan"></list>
  </div>
</template>

<script>
import tabbar from '../../components/tabbar.vue'
import model from './model.vue'
import list from './list.vue'

export default {
    name:'simulation',
    components: {
    tabbar,
    model,
    list,
  },
  data(){
    return{
      zhuan:1234.12,
      pu:12351.234,
      pai:''
    }
  },
  updated(){
    this.pai=document.getElementById('pai').value;
  },
  methods:{
    jinClick(){
      // alert('jin');
      this.zhuan-=1
      this.pu-=1
    },
    chuClick(){
      // alert('jin')
      this.zhuan+=1
      this.pu+=1
      this.pai=document.getElementById('pai').value;
      console.log((this.pai));
    }
  }
}
</script>

<style scoped>
    .content{
        position: absolute;
        left: 30%;
        top: 120px;
        float: right;
    }
    .input{
        left: 0;
        height: 50px;
        width: 500px;
    }
    .btn{
      float: left;
      padding-top: 100px;
      left: 0;
    }
    .list{
      padding-top: 200px;
    }
</style>