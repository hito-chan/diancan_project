const db = wx.cloud.database()
const _ = db.command
const seven =  db.collection('seven_day_sales')

// 计算当天销售额
class Analysis {
	constructor(){}
	// time  当天时间  sale_valume  提交的菜品总价
	async sameday(time,sales_valume){
		try{
			console.log(123);
			let query = await seven.where({time}).get()
			console.log("12",query);
			if(query.data.length == 0){
				await seven.add({data:{time,sales_valume}})
			}else{
				let total_amount = Number(query.data[0].sales_valume) + sales_valume
				let final_data = parseFloat((total_amount).toFixed(10))
				await seven.doc(query.data[0]._id).update({
					data:{
						sales_valume:final_data
					}
				})
				let a = 0.1+0.2
				// console.log(a);
				// 				//js浮点数精度丢失处理
				// console.log(final_data);
			}
		}catch(e){
			//TODO handle the exception
			throw '出错'
		}
	}
	
}	

export {Analysis}
	