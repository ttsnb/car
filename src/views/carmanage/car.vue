<template>
  <div class="content">
    <!-- <list :shuju="shuju" @edit="edit" @del="del" @btn1="btn1" @btn2="btn2" @btn3="btn3" @btn4="btn4">
    </list> -->

    <a-button class="editable-add-btn" @click="handleAdd">
      Add
    </a-button>
    <a-table :columns="columns" :data-source="data" bordered>
      <template
        v-for="col in ['name', 'age', 'address']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
            <a-popconfirm
              v-if="data.length"
              title="Sure to delete?"
              @confirm="() => onDelete(record.key)"
            >
              <a href="javascript:;" :disabled="editingKey !== ''">Delete</a>
            </a-popconfirm>
          </span>
        </div>
      </template>
    </a-table>









  </div>
</template>

<script>
import list from './list.vue'
import {getCar} from '../../network/home'
export default {
    name:'carmanage',
    components:{
        list
    },
    mounted () {
      console.log(this.cacheData);
    },
    data(){
      this.cacheData = data.map(item => ({ ...item }));
        return{
            data,
            columns,
            editingKey: '',
            shuju:[
              {
                key: '1',
                id_num: '陕A10086',
                name: '蓝猫',
                tel: 110,
                apartment: '陕西',
                
              },
              {
                key: '2',
                id_num: '陕B10085',
                name: '红兔',
                tel: 110,
                apartment: '陕西',
                
              },
              {
                key: '3',
                id_num: '陕B10084',
                name: '扈三娘',
                tel: 110,
                apartment: '陕西',
                
              },
              {
                key: '4',
                id_num: '陕B10083',
                name: '张作霖',
                tel: 110,
                apartment: '张府',
                
              },
            ]
        }
        
    },
    created(){
      // getCar().then(res=>{
      //   console.log(res);
      //   this.shuju.push(res);
      // })
    },
    methods:{
        edit(index){
            // console.log(index);
            this.shuju[index].tel+=100
        },
        del(index){
            // console.log(index);
            this.shuju[index].tel-=100
        },
        btn1(index,newzhi){
          // alert(index+newzhi)
          this.shuju[index].id_num=newzhi
        },
        btn2(index,newzhi){
          // alert(index+newzhi)
          this.shuju[index].name=newzhi
        },
        btn3(index,newzhi){
          // alert(index+newzhi)
          this.shuju[index].tel=newzhi
        },
        btn4(index,newzhi){
          // alert(index+newzhi)
          this.shuju[index].apartment=newzhi
        },
        handleChange(value, key, column) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        console.log("target",target);
        if (target) {
          // target是对象引用，指向同一个对象，所以修改target，newData也随之修改，完成更新
          target[column] = value;
          this.data = newData;
          console.log("change");
        }
      },
      edit(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = key;
        if (target) {
          target.editable = true;
          this.data = newData;
          console.log("ok");
        }
      },
      save(key) {
        const newData = [...this.data];
        const newCacheData = [...this.cacheData];
        const target = newData.filter(item => key === item.key)[0];
        const targetCache = newCacheData.filter(item => key === item.key)[0];
        console.log(newData);
        console.log(newCacheData);
        console.log(target);
        console.log(targetCache);
        console.log(key);
        if (target && targetCache) {
          // 删除editable属性
          delete target.editable;
          this.data = newData;
          Object.assign(targetCache, target);
          this.cacheData = newCacheData;
           console.log("ok");
        }
        // delete target.editable;
        //   this.data = newData;
        //   Object.assign(targetCache, target);
        //   this.cacheData = newCacheData;

        this.editingKey = '';
        console.log(this.data);
      },
      cancel(key) {
        const newData = [...this.data];
        const target = newData.filter(item => key === item.key)[0];
        this.editingKey = '';
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.data = newData;
        }
      },
      onDelete(key) {
        const dataSource = [...this.data];
        this.data = dataSource.filter(item => item.key !== key);
      },
      handleAdd() {
        console.log("添加");
        this.data.push({
            key: '10',
            name: '',
            age: 31,
            address: ''

        })
        this.cacheData.push({
            key: '10',
            name: '',
            age: 31,
            address: ''

        })
      },
    }
}

const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      scopedSlots: { customRender: 'age' },
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      scopedSlots: { customRender: 'address' },
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
</script>

<style scoped>
    .content{
        position: absolute;
        left: 25%;
        top: 100px;
        float: right;
    }
    .editable-row-operations a {
    margin-right: 8px;
  }
</style>