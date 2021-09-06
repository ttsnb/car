<template>
  <div class="content">
      <!-- <h2>4</h2> -->
    <list :shuju="shuju" >
        <!-- <button slot="editbtn">edit</button>
        <button slot="delbtn">del</button> -->
    </list>
  </div>
</template>

<script>
import list from './list.vue'
export default {
    name:'log',
    components:{
        list
    },
    data(){
        return{
            shuju:[
              {
                key: '1',
                ID_num: '陕A10082',
                log:[
                        {
                        info: '东门',
                        in: 202109011212,
                        out: 202109011213,
                        },
                        {
                        info: '北门',
                        in: 202109011248,
                        out: 202109011300,
                        },
                        {
                        info: '西门',
                        in: 202109011350,
                        out: 202109011400,
                        },
                    ]
                
              },
              {
                key: '1',
                ID_num: '陕A10081',
                log:[
                        {
                        info: '东门',
                        in: 202109011212,
                        out: 202109011213,
                        },
                        {
                        info: '东门',
                        in: 202109011248,
                        out: 202109011300,
                        },
                        {
                        info: '西门',
                        in: 202109011350,
                        out: 202109011400,
                        },
                    ]
                
              },
              {
                key: '1',
                ID_num: '陕A10082',
                log:[
                        {
                        info: '东门',
                        in: 202109011212,
                        out: 202109011213,
                        },
                        {
                        info: '西门',
                        in: 202109011248,
                        out: 202109011300,
                        },
                        {
                        info: '东门',
                        in: 202109011350,
                        out: 202109011400,
                        },
                    ]
                
              },
              {
                key: '1',
                ID_num: '陕A10082',
                log:[
                        {
                        info: 'b楼东100m',
                        in: 202109011212,
                        out: 202109011213,
                        },
                        {
                        info: '东门',
                        in: 202109011248,
                        out: 202109011300,
                        },
                        {
                        info: '西门',
                        in: 202109011350,
                        out: 202109011400,
                        },
                    ]
                
              },
            ]
        }
        
    },
    methods:{
        // edit(index){
        //     console.log(index);
        //     this.shuju[index].tel+=100
        // },
        // del(index){
        //     console.log(index);
        //     this.shuju[index].tel-=100
        // }
    }
}
</script>

<style scoped>
    .content{
        position: absolute;
        left: 25%;
        top: 100px;
        float: right;
    }
</style>