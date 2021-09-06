<template>
  <div>
    <table class="tb">
                <thead>
                    <tr>
                        <th>ID_num</th>
                        <th>info</th>
                        <th>in</th>
                        <th>out</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in shuju" :key="index">
                    <th>{{item.ID_num}}</th>
                    <th colspan="3">
                        <ul >
                            <li v-for="(it,index) in item.log" :key='index'>
                                 <!-- {{it.info}}&nbsp;&nbsp;{{it.in}}&nbsp;&nbsp;{{it.out}} -->

                                <tr class="table">
                                    <th>{{it.info}}</th>
                                    <th>{{it.in}}</th>
                                    <th>{{it.out}}</th>
                                </tr>



                            </li>
                        
                        
                        
                        </ul>
                    </th>
                    
                    
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
   
  }
}
</script>

<style>
  .tb {
    position: absolute;
    top: 40px;
    left: 25%;
    width: 100vh;
    border-collapse: collapse;
    font-size: 20px;
    text-align: center;
}
  th,
  td {
      border: solid rgba(12, 12, 12, 0.144) 1px;
  }
    .table{
        top: 0px;
        left: 100px;
        
        width: 100%;
    }

    .table>th{
        border: none;
        height: 50px;
        padding-left: 100px;
        padding-right: 100px;
    }
  ul{
      list-style-type: none;
  }
</style>