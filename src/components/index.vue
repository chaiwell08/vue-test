<template>
  <div class="navHead" id="app">
    <div>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected @on-item-click="onItemClick">
      已办
      </tab-item>
      <tab-item @on-item-click="onItemClick">未办</tab-item>
      <tab-item @on-item-click="onItemClick">我的</tab-item>

    </tab>
        <DoneList v-if="index==0"></DoneList>
       <TodoList  v-if="index==1"></TodoList>
       <MyList v-if="index==2"></MyList>
    </div>
  </div>
</template>

<i18n>
set bar-active-color:
  zh-CN: 设置bar颜色
</i18n>

<script>
import { Tab, TabItem } from 'vux'
import TodoList from './TodoList'
import MyList from './MyList'
import DoneList from './DoneList'

export default {
  components: {
    Tab,
    TabItem,
    DoneList,
    MyList,
    TodoList
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    onItemClick (index) {
      this.index = index
    }
  }
}
</script >

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.navHead{
  .vux-tab-wrap .vux-tab-container .vux-tab .vux-tab-selected{
    color:#48a9fd;
    boder-color:#48a9fd;
  }
  span{
    color:#23b8ff;
    
  }
}
</style>
