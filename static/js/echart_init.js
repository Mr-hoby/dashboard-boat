var dom = document.getElementById('pie');
var myChart = echarts.init(dom, null, {
	renderer: 'canvas',
	useDirtyRect: false
});
var app = {};

var option;

option = {
	color:['#3fc3d0','#6cdabd','#f7b61c'],
	tooltip: {
		trigger: 'item'
	},
	series: [{
		name: '',
		type: 'pie',
		radius: ['25%', '70%'],
		avoidLabelOverlap: false,
		label: {
			show: false,
			position: 'center'
		},
		emphasis: {
			label: {
				show: true,
				fontSize: '30',
				fontWeight: 'bold'
			}
		},
		labelLine: {
			show: false
		},
		data: [{
				value: 30,
				name: '已完成'
			},
			{
				value: 50,
				name: '在执行'
			},
			{
				value: 70,
				name: '待执行'
			}
		]
	}]
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
