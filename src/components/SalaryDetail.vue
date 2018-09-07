<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    }
    p{
        margin:0;
        padding:0;
    }
    .navHead{
        background-color:#FFF;
        color:black;
        .header{
            background-color:#FFF;
            .vux-header{
                background-color:#185fd4;
                .vux-header-left{
                    color:#185fd4;
                    .vux-header-back{
                        color:#185fd4;
                    }
                }
                .vux-header-title{
                    color:#185fd4;
                }
            }
        }
        .block{
            width:100%;
            .el-date-editor.el-input, .el-date-editor.el-input__inner{
                width:100%;
                .el-date-editor .el-input__prefix{
                    position:absolute;
                    top:0;
                    right:5px;
                }
            }
        }
        .real{
            p{
                line-height:40px;
                margin-top:10px;
                border-bottom:1px solid #ccc;
                color:#000;
                .realSalary{
                    float:right;
                    color:#9a9393;
                }
            }
        }
        section{
            position:relative;
            font-size:16px;
            .shouldGet{
                width:50px;
                height:22px;
                text-align:center;
                position:absolute;
                top:0;
                left:5px;
                background-color:#4395FF;
                border-bottom-right-radius:10px;
                color:#fff;
            }
            p{
                margin:0;
                padding:0;
            }
            .weui-cell{
                // padding:0;
                // margin:0;
            }
            .vux-cell-box {
                margin-top:2px;
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
    <div>
        <div class="header">
            <x-header :left-options="{backText: ''}">薪资单</x-header>
        </div>
        <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        <div class="real">
            <p>
                <span class="date">kobe-Bryant<span style="color:#9a9393;margin-left:5px">(AE86)</span></span>
                <span class="realSalary">
                    <span>2018-08-18</span>
                </span>
            </p>
	    </div>
        <section>
                <span class="shouldGet">应发</span>
                <cell
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent001 ? 'up' : 'down'"
                    @click.native="showContent001 = !showContent001">
                </cell>
                <template v-if="showContent001">
                    <cell-box :border-intent="false" class="sub-item" is-link>
                        <span>月固定收入</span>
                        <span class="contentRight">5000,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>固定津贴</span>
                        <span class="contentRight">1800,00￥</span>
                    </cell-box>
                   <cell-box class="sub-item" is-link>
                        <span>全勤奖金</span>
                        <span class="contentRight">500,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>其他奖金</span>
                        <span class="contentRight">1000,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>xxx奖金</span>
                        <span class="contentRight">500,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>xxx津贴</span>
                        <span class="contentRight">1000,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>小计</span>
                        <span class="contentRight">9000,00￥</span>
                    </cell-box>
                </template>
        </section>
         <section>
                <span class="shouldGet" style="background-color:#7ec738">应扣</span>
                <cell
                    is-link
                    :border-intent="false"
                    :arrow-direction="showContent002 ? 'up' : 'down'"
                    @click.native="showContent002 = !showContent002">
                </cell>
                <template v-if="showContent002">
                    <cell-box :border-intent="false" class="sub-item" is-link>
                        <span>养老保险</span>
                        <span class="contentRight">100,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>失业保险</span>
                        <span class="contentRight">50,00￥</span>
                    </cell-box>
                   <cell-box class="sub-item" is-link>
                        <span>医疗保险</span>
                        <span class="contentRight">100,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>住房公积金</span>
                        <span class="contentRight">300,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>租房</span>
                        <span class="contentRight">800,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>餐费</span>
                        <span class="contentRight">1000,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>商保加保扣款</span>
                        <span class="contentRight">200,00￥</span>
                    </cell-box>
                    <cell-box class="sub-item" is-link>
                        <span>小计</span>
                        <span class="contentRight">7000,00￥</span>
                    </cell-box>
                </template>
        </section>
    </div>
</template>
 
<script>
 import { XHeader,Search,Panel,Group,Cell,CellBox} from 'vux'
 import Salary from './Salary'
export default {
    directives: {
        Salary,
  
    },
  name: "SalaryDetail",
  methods:{
    onClick () {
      console.log('on click')
    }
  },
  components: {
    XHeader,
    Search,
    Panel,
    Group,
    Cell,
    CellBox
  },
  data () {
    return {
        value1:'',
        showContent001: true,
        showContent002:true,
    };
  }
}
</script>