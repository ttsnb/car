<template>
  <div>
    <table class="tb">
                <thead>
                    <tr>
                        <th>id_num</th>
                        <th>name</th>
                        <th>tel</th>
                        <th>apartment</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in shuju" :key="index" >
                    <th><button @click="btn1(index)" :disabled=true :class=createClass(index,1) class="btn">{{item.id_num}}</button></th>
                    <th><button @click="btn2(index)" :disabled=true :class=createClass(index,2) class="btn">{{item.name}}</button></th>
                    <th><button @click="btn3(index)" :disabled=true :class=createClass(index,3) class="btn">{{item.tel}}</button></th>
                    <th><button @click="btn4(index)" :disabled=true :class=createClass(index,4) class="btn">{{item.apartment}}</button></th>
                    <th><button @click="editClick(index)" :class=createClass(index,5)>{{edit}}</button></th>
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
      isActive1:true,
      isActive:true,
      edit:'edit'
    }
  },
  methods:{
    createClass(index,t){
      return 'btn'+index+t
    },
    editClick(index){
      // console.log(index);
      for(let i=1;i<=4;i++)
        {
          document.querySelector('.'+this.createClass(index,i)).disabled=!document.querySelector('.'+this.createClass(index,i)).disabled;
          // document.querySelector('.'+this.createClass(index,i)).background='#fff';
          // console.log(document.querySelector('.'+this.createClass(index,i)).background);
        }
      // console.log(document.querySelector('.'+this.createClass(index,1)).innerHTML);
      document.querySelector('.'+this.createClass(index,5)).innerHTML=(document.querySelector('.'+this.createClass(index,5)).innerHTML==='edit') ? 'save' : 'edit';
      // console.log(document.querySelector('.'+this.createClass(index,5)).innerHTML);
      this.$emit('edit',index)
    },
    delClick(index){
      console.log(index);
      this.$emit('del',index)
    },
   btn1(index){
    //  alert('afa')
    let newzhi=prompt('请输入')
    if(newzhi!==null&&newzhi!=='') 
    {
      // console.log(newzhi)
      this.$emit('btn1',index,newzhi)
    }
    
   },
   btn2(index){
    //  alert('afa')
    let newzhi=prompt('请输入')
    // console.log(newzhi)
    if(newzhi!==null&&newzhi!=='')  this.$emit('btn2',index,newzhi)
   },
   btn3(index){
    //  alert('afa')
    let newzhi=prompt('请输入')
    // console.log(newzhi)
    if(newzhi!==null&&newzhi!=='')  this.$emit('btn3',index,newzhi)
   },
   btn4(index){
    //  alert('afa')
    let newzhi=prompt('请输入')
    // console.log(newzhi)
    if(newzhi!==null&&newzhi!=='')  this.$emit('btn4',index,newzhi)
   }
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
      background: #fff;
      
  }
  .btn{
    /* background: rgb(178, 187, 211); */
    border: none;
  }
</style>
