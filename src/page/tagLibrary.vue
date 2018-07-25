<template>
    <div class="tag-library">
        <div class="catalog">
            <div class="tag-title">
                <input type="text" v-model.lazy="tagTitle" class="tag-title-input" @keyup.enter="changeTagTitle">
            </div>
            <div class="add-classify">
                <span>增加分类</span>
            </div>
            <el-collapse class="tag" accordion>
            <el-collapse-item>
                 <div slot="title" class="tag-item-wrapper">
                <span class="tag-item">犯罪构成要件标签</span><span class="delete" @click="deleteParentClassify($event)"><i class="header-icon el-icon-error"></i></span>
                </div>
                <ul class="tag-list">
                    <li v-for="(item, index) in tagLists" :key="item.id" ref="tagItem"><span class="tagName">{{item.title}}</span><span class="delete" @click="deleteClassify($event,index)"><i class="el-icon-error"></i></span></li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
    </div>
</template>
<script>
export default{
    data () {
        return{
          tagTitle: '抢劫罪标签',
          tagLists:[
              {
                  id: 1,
                  title: '以暴力、胁迫或者其他方法抢劫以暴力、胁迫或者其他方法抢劫'
              },
              {
                  id: 2,
                  title: '公私财物'
              },
              {
                  id: 3,
                  title: '违禁品、违法所得、犯罪所得'
              }
          ]
        }
    },
    methods: {
      deleteParentClassify($event){
          if(this.tagLists.length > 0){
              alert('分类中还有标签没有移动或删除，请先清空标签才能删除分类。')
          }else{
              $event.target.parentNode.parentNode.parentNode.remove()
          }
      },
      deleteClassify ($event,index) {
          //$event.target.parentNode.parentNode.remove()
          //console.log(this.$refs.tagItem[index])
          //this.$refs.tagItem[index].remove()
          this.tagLists.splice(index,1)
      }
    },
    mounted: function () {
        
    },
    components: {
        
    }
} 
</script>
<style lang="less">
@import '../assets/less/public.less';
.tag-library{
    .pr;
    .border-box;
    .bgc(rgb(228, 225, 225));
    .h(1000px);
    .catalog{
        .w(250px);
        .h(800px);
        border:1px solid #fff;
        .bgc(#fff);
        .mt(30px);
        .ml(20px);
        .left;
        -webkit-box-shadow: 0px 0px 5px rgb(128, 127, 127); 
        -moz-box-shadow: 0px 0px 5px rgb(128, 127, 127); 
        box-shadow: 0px 0px 5px rgb(128, 127, 127); 
    }
    .el-collapse{
      border-bottom:0;
      border-top:0;
    }
    .el-collapse-item__wrap{
        border-bottom:0;
    }
    .el-collapse-item__header{
        border-bottom:0;
    }
    .tag-title{
        .w(100%);
        .h(50px);
        .l(50px);
        .pl(20px);
        .tag-title-input{
            border:0;
        }
    }
    .add-classify{
        .ta;
        .f(14px);
        span{
            .cursor;
        }
    }
    .tag-list li{
        .pl(20px);
        .mb(5px);
    }
    .tag-list li:hover{
        .delete{
            display:block;
        }
    }
    .delete{
        .right;
        .mr(20px);
        display:none;
        .cursor;
    }
    .tag{
        .tag-item{
          .pl(20px);
          .mr(60px);
        }
        .tagName{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            .w(160px);
            .i-block;
        }
    }
    .tag-item-wrapper:hover{
        .delete{
            display:block;
        }
    }
}
</style>
