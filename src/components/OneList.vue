<template>

  <div id="OneItem">
    <ul v-for="(item,index) in myList">
          <li  @click="jumperTo">
            <div class="itemHead">
              <img src="../imgs/haha.jpg"/>
              <p class="itemRight">
                结束
              </p>
              <p class="itemLeft">
                <span style="color:#23b8ff">{{item.title}}</span><br/>
                <span>柴伟</span>
              </P>
            </div>
            <div class="itemFoot">
              <p>最后审批人&nbsp;&nbsp;&nbsp;&nbsp;<span>杨福敏</span></p>
              <p class="applyTime">申请时间&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="goLink">></span>
                <span>{{item.date}}&nbsp;{{item.time}}</span>
              </P>
            </div>
          </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OneList',
  components: {
   
  },
  methods: {
    jumperTo(){
      // console.log(1);
      this.$router.push('/Detail');
    }
  },
  data () {
    return {
      myList:[
        {
          id:1,
          title:'员工住宿',
          date:'2018-08-15',
          time:'09:26',
        },
        {
          id:2,
          title:'网上报销',
          date:'2018-07-15',
          time:'20:26',
        },
        {
          id:3,
          title:'培训生合同信息维护',
          date:'2018-07-29',
          time:'18:26',
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #OneItem{
    color:#757070;
    p{
      margin:0;
      padding:0
    }
    ul{
      margin:0;
      padding:0;
      list-style:none;
      width:100%;
      height:auto;
      li{
        background-color:#eee;
        margin-top:10px;
        width:100%;
        .itemHead{
          border-bottom:1px solid #ccc;
          overflow:hidden;
          padding-bottom:10px;
          img{
            float:left;
            margin-right:20px;
          }
          .itemRight{
            line-height:45px;
            float:right;
            
          }
          .itemLeft{
              float:left;
            }
        }
        .itemFoot{
          margin-top:10px;
          position:relative;
          .applyTime{
            margin-top:10px;
            .goLink{
              position:absolute;
              top:8px;
              right:10px;
            }
            
          }
        }
        
      }
    }
  }
  
</style>
