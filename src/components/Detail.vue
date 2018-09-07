<style lang="less">
    #detail{
        p{
            margin:0;
            padding:0;
        }
        header{
            background-color:rgba(45,120,244,1);
            color:#ffffff;
            .vux-header{
                color:#ffffff;
                background-color:rgba(45,120,244,0.8);  
            }
            .applyHistory{
                width:100%;
                height:80px;
                // margin-left:30px;
                position:relative;
                .veticalLine{
                    width:20;
                    height:80px;
                    border-left:1px solid rgba(255,255,255,.3);
                    position:absolute;
                    top:0;
                    left:18px;
                }
                .applyHistory::after{
                    content:"";
                    height:80px;
                    border:1px solid rgba(255,255,255,.3);
                    position:absolute;
                    right:20px;
                    top:0;
                }
                p{
                    padding-left:36px;
                    position:relative;
                    .weui-icon-success{
                        position:absolute;
                        top:0;
                        left:3px;
                    }
                }
            }

        }
        section{
            .vux-cell-box {
                    .contentRight{
                        position:absolute;
                        top:10px;
                        right:0;
                    }
            }
            
           
        }
    }
 
</style>
 
<template>
    <div id="detail">
        <header @click="goMyList" >
            <x-header :left-options="{backText: ''}" >详情</x-header>
            <div class="applyHistory">
                <span class="veticalLine"></span>
                <p>审批历史</p>
                <p>
                    <icon type="success"></icon>
                    部门领导
                    <span>杨福敏审批同意</span>
                    <span>08月13日</span>
                    <span>16:11</span>
                </p>
            </div>
        </header>  
        <section>
                <cell
                    :title="('住宿信息')"
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent001 ? 'up' : 'down'"
                    @click.native="showContent001 = !showContent001">
                </cell>
                <template v-if="showContent001">
                    <cell-box :border-intent="false" class="sub-item" is-link>
                        <span>工号</span>
                        <span class="contentRight">20474</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>姓名</span>
                        <span class="contentRight">柴伟</span>
                    </cell-box>
                   <cell-box class="sub-item" is-link>
                        <span>部门</span>
                        <span class="contentRight">技术发展中心.移动技术中心.培训生组</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>预定类型</span>
                        <span class="contentRight">四人间</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>518-3</span>
                        <span class="contentRight">20474</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>入住时间从</span>
                        <span class="contentRight">2018-08-15</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>入住时间到</span>
                        <span class="contentRight">2018-12-16</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>项目</span>
                        <span class="contentRight">20474</span>
                    </cell-box>
                </template>
        </section>
    </div>
</template>
 
<script>
import { ButtonTab, ButtonTabItem, Divider, XHeader,Icon,Cell,CellBox,Group } from 'vux'
import MyList from './MyList'
export default {
    directives: {
        MyList
    },
  name: "Detail",
  components:{
      ButtonTab,
      ButtonTabItem, 
      Divider,
      XHeader,
      Icon,
      Cell,
      CellBox,
      Group
  },
  methods: {
    onClick () {
      console.log('on click')
    },
    goMyList(){
        this.$router.push('/MyList');
    }
  },
  data () {
    return {
         showContent001: false,
    };
  }
}
</script>