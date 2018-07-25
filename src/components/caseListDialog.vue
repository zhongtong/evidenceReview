<template>
    <div class="tree-container">
        <ul class="parent-ul">
            <li class="blue"><span class="li-title">法律手续</span><span class="li-open">></span></li>
            <li><span class="li-title">证据卷1</span><span class="li-open">></span></li>
        </ul>
        <ul class="parent-ul">
            <li><span class="li-title">文件夹1</span><span class="li-open">></span></li>
            <li class="blue"><span class="li-title">文件夹2</span><span class="li-open">></span></li>
            <li><span class="li-title">文件夹3</span><span class="li-open">></span></li>
        </ul>
        <ul class="parent-ul">
            <li><span class="li-title">详情1</span></li>
            <li class="blue"><span class="li-title">详情2</span></li>
            <li><span class="li-title">详情3</span></li>
        </ul>
    </div>
</template>
<script>
import $ from 'jquery'
export default{
    data () {
        return{
            parentUl:[
                
            ]
        }
    },
    methods: {

    },
    mounted: function () {
        $('.tree-container ul').last().css({'border':'1px solid #ccc'})
    },
    components: {

    }
}
</script>
<style lang="less">
@import '../assets/less/public.less';
.tree-container{
    .clearfix;
    .w(500px);
    overflow-x: scroll;
    overflow-y:hidden;
    white-space: nowrap;
    ul{
    .w(200px);
    .h(600px);
    border:1px solid #ccc;
    border-right:transparent;
    display: inline-table;
    .mr(-5px);
    li{
        .clearfix;
        .li-title{
            .i-block;
            .w(130px);
            .h(20px);
            .ml(30px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .li-open{
            .right;
            .mr(20px);
        }
    }  
}
}
.blue{
    color:rgb(24, 113, 248);
}
</style>
