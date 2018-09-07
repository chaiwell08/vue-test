<template>
  <div id="app">
	<div class="header">
		<div class="salaryList"><a href="#" @click="goDoneList"><</a>薪资报表</div>
		<div class="nav">
				<div class="navList">
					<a href="#"><span>汉得信息</span></a>
					<a href="#"><span>年初至今</span></a>
					<a href="#"><span>占比最高</span></a>
				</div>
		</div>
		<div class="uptoNow"><a href="#">-(年初至今)</a></div>
	
	
	<!--创建一个echarts的容器-->
			<div class="salaryNum">
				<p><span>预计薪资</span><span class="forecastSalary">￥10,000.00</span></p>
				<p><span>实发薪资</span><span class="actualSalary">￥8,000.00</span></p>
			</div>
			<div class="salaryPro">
				<span style="font-size:20px">70%</span>
				<p>基础工资所占比</p>
			</div>
		<div id="echartContainer" style="width:220px; height:220px">
		</div>
	</div>
	<p class="salary-detail" @click="goSalaryDetail"><span>薪资明细</span></p>
	<div class="real">
		<p>
		<span class="date">2018-07</span>
		<span class="realSalary">
			<span>实发</span>
			<span>￥7,000,000</span>
		</span>
		</p>
		<p><span class="date">2018-08</span>
		<span class="realSalary">
			<span>实发</span>
			<span>￥6,800,000</span>
		</span>
		</p>
	</div>
	
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'App',
    methods:{
        goSalaryDetail(){
            this.$router.push("/SalaryDetail")
        },
		goDoneList(){
			this.$router.push('/')
		}
    },
    mounted () {
        let myChart = echarts.init(document.getElementById('echartContainer'))
        myChart.setOption({
        option : {
            tooltip: {
            trigger : 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
            }
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
            },
            data: [
                {value:500,},
				{value:2500,},
                {value:7000,}
          ]
        }
      ]
    })
  }
}
</script>

<style scoped>
p{
	margin:0;
	padding:0;
}
#app a{
	text-decoration:none;
	color:#ffffff;
	
}
#app {
	position:relative;
	width:100%;
	
}
#app .header{
	background-color:rgba(5,107,230,.75);
	opicaty:0.5;
	color:#ffffff;
	position:relative;
}
.salaryList{
	fontSize:20px;
	line-height:50px;
	text-align:center;
}
.salaryList>a{
	float:left;
	fontSize:25px;
}
.nav{
	margin:0  0 20px 0;
	text-align:center;
}
.navList{

}
.navList>a>span{
	// margin-right:20px;
}
.uptoNow{
	text-align:center;

}
.salaryType{
	position:absolute;
	top:250px;
	right:50%;
}
.salaryType p span{
	margin-left:20px;
}
.salary-detail{
	height:40px;
	margin-top:20px;
	border-bottom:2px solid #ccc;
	padding-bottom:5px;
	color:gray;
}
.salary-detail span{
	padding-left:20px;
	display:inline-block;
	width:100px;
	height:20px;
	border-left:5px solid #519af2;
	
}
.real>p{
	height:40px;
	margin-top:10px;
	border-bottom:2px solid #ccc;
	padding-bottom:5px;
	color:gray;
}
.real p .realSalary{
	float:right;
	color:#000;
}
.salaryPro{
	position:absolute;
	top:192px;
	left:62px;
	font-size:14px;
	text-align:center;
}
.salaryNum{
	position:absolute;
	top:200px;
	right:20px;
	font-size:14px;
}
.forecastSalary,.actualSalary{
	margin-left:10px;
}
.forecastSalary{
	color:#d8cb14;
}
.actualSalary{
	color:orange;
}
</style>
