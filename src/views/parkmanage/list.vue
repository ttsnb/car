<template>
  <div>
    <table class="tb">
                <thead>
                    <tr>
                        <th>Park_id</th>
                        <th>isfixd</th>
                        <th>is_occupied</th>
                        <th>ID_num</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in shuju" :key="index">
                    <th>{{item.Park_id}}</th>
                    <th>{{item.isfixd}}</th>
                    <th>{{item.is_occupied}}</th>
                    <th>{{item.ID_num}}</th>
                    <!-- <th><slot name="editbtn" @click="send"></slot></th>
                    <th><slot name="delbtn" @click="send"></slot></th> -->
                    
                    <th><button @click="editClick(index)">edit</button></th>
                    <th><button @click="delClick(index)">del</button></th>
                  </tr>
                </tbody>
            </table>
  </div>
</template>

<script>
export default {
  name:'list',
  props:
  {
    shuju:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      
    }
  },
  methods:{
    editClick(index){
      console.log(index);
      this.$emit('edit',index)
    },
    delClick(index){
      console.log(index);
      this.$emit('del',index)
    },
   
  }
}
</script>

<style>
  .tb {
    position: absolute;
    top: 40px;
    left: 25%;
    width: 100%;
    border-collapse: collapse;
    font-size: 20px;
    text-align: center;
    padding:10px;
}
  th,
  td {
      border: solid rgba(12, 12, 12, 0.144) 1px;
      padding: 8px;
      
  }
</style>