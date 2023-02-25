<template>
	<view>
		<block v-for="(item, index) in res_data" :key="index">
			<view class="my-order-view" @click="toJump(item)">
				<view class="my-order-name">
					<text>天天来客餐饮店</text>
					<text>{{ item.transac_status == 'success' ? '已完成' : '待结账' }}</text>
				</view>
				<view class="my-order-number">
					<view>
						<view>
							<text>桌台名称 ：</text>
							<text>{{ item.table_number }}</text>
						</view>
						<view class="my-order-time">
							<text>下单时间 ：</text>
							<text>{{ item.order_time }}</text>
						</view>
					</view>
					<view class="my-order-price">¥{{ Price(item.sett_amount) }}</view>
				</view>
			</view>
		</block>
		<view style="height: 100rpx;"></view>
	</view>
</template>

<script>
// 1. 获取数据库引用
const db = wx.cloud.database();
const _ = db.command;
const good_collect = db.collection('order_data');
// 价格补零
const Price = require('e-commerce_price');
export default {
	data() {
		return {
			Price,
			res_data: []
		};
	},
	methods: {
		async get_menu() {
			try {
				let field_obj = { transac_status: true, table_number: true, order_time: true, sett_amount: true };
				let res = await good_collect
					.where({})
					.orderBy('time', 'desc')
					.field(field_obj)
					.get();
				console.log(res);
				this.res_data = res.data;
			} catch (e) {
				//TODO handle the exception
			}
		},
		// 点击订单跳转加菜界面
		toJump(item) {
			// 跳转订单详情页面
			let item_str = JSON.stringify(item)
			wx.navigateTo({
				url: '/pages/order-detail/detail?item='+item_str
			});
			
		}
	},
	onLoad() {
		this.get_menu();
	}
};
</script>

<style>
page {
	background-color: #f4f4f4;
}
.my-order-view {
	background-color: #ffffff;
	border-radius: 10rpx;
	margin: 20rpx;
	padding: 20rpx;
}
.my-order-name {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid #e5e5e5;
}
.my-order-name text:nth-child(1) {
	font-weight: bold;
}
.my-order-number {
	padding-top: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #999999;
}
.my-order-time {
	padding-top: 20rpx;
}
.my-order-price {
	color: #000000 !important;
	font-weight: bold;
}
</style>
