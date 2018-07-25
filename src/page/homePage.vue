<template>
    <div class="homePage">
        <tag-library></tag-library>
    </div>
</template>
<script>
import tagLibrary from '@/page/tagLibrary'
export default{
    data () {
        return{
          activeNames: ['1'],
          tagTitle: '抢劫罪标签'
        }
    },
    methods: {
      
    },
    mounted: function () {
        
    },
    components: {
        tagLibrary
    }
}
</script>
<style lang="less">
@import '../assets/less/public.less';
</style>
