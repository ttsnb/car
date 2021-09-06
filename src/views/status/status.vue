<template>
  <div class="content">
      <!-- <h2>3</h2> -->
      <h3>专用车位</h3>
            <a-list :grid="{ gutter: 16, column: 4 }" :data-source="shuju">
                <a-list-item slot="renderItem" slot-scope="item" >
                    <a-card :title="item.title"  style="background-color: red">
                        Card content
                    </a-card>
                </a-list-item>
            </a-list>
      <hr/>
      <h3>固定车位</h3>
            <a-list :grid="{ gutter: 16, column: 4 }" :data-source="shuju">
                        <a-list-item slot="renderItem" slot-scope="item">
                            <a-card :title="item.title">
                                {{item.state}}
                            </a-card>
                        </a-list-item>
            </a-list>
  </div>
</template>

<script>
export default {
    name:'status',
    data(){
        return{
            shuju:
                [
                    {
                        title: 'Title 1',
                        state:'有'
                    },
                    {
                        title: 'Title 2',
                        state:'有'
                    },
                    {
                        title: 'Title 3',
                        state:'有'
                    },
                    {
                        title: 'Title 4',
                        state:'有'
                    },
                    {
                        title: 'Title 4',
                        state:'有'
                    },
                ]
        }
    }
}
</script>

<style scoped>
    .content{
        position: absolute;
        left: 22%;
        top: 100px;
        float: right;
        width: 75%;
    }
</style>