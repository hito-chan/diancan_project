<script>
	export default {
		globalData:{
			Modelmes:null
		},
		onLaunch: function() {
			wx.cloud.init({
			  env: '填写你的云环境id',
			  traceUser: true,
			})
		   //建立连接
			this.goeasy.connect({
				id:"", //pubsub选填，im必填，最大长度60字符
				data:{}, //必须是一个对象，pubsub选填，im必填，最大长度300字符，用于上下线提醒和查询在线用户列表时，扩展更多的属性
				onSuccess: function () {  //连接成功
				  console.log("连接成功.") //连接成功
				},
				onFailed: function (error) { //连接失败
				  console.log('连接失败');
				},
				onProgress:function(attempts) { //连接或自动重连中
				  console.log('连接或自动重连中');
				}
			});
			
			// 获取设备型号
			wx.getSystemInfo({
				success:(res)=>{
					console.log(res);
					if(res.safeArea.top > 40){
						this.globalData.Modelmes = true
					}else{
						this.globalData.Modelmes = false
					}
				}
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
