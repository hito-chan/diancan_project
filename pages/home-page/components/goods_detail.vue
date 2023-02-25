<template>
	<!-- 单个商品弹出 -->
	<view class="details-back">
		<view class="goods-details coup-anim">
			<view class="goods-image">
				<image :src="pro_details.itemgoods.image[0].url" mode="aspectFill"></image>
				<image src="/static/tab/guanbi.png" mode="widthFix" @click="close"></image>
			</view>
			<view class="details-padd">
				<view class="details-name">{{pro_details.itemgoods.name}}</view>
				<view class="details-Thinning">已售 {{pro_details.itemgoods.monthlysale}}</view>
				<view class="describe">
					<view class="details-unit-price">
						<text>¥</text>
						<text>{{pro_details.itemgoods.unitprice}}</text>
						<text>/{{pro_details.itemgoods.unit}}</text>
					</view>
					<view class="details-quantity">
						<view><image v-if="pro_details.itemgoods.quantity>0" src="/static/tab/jianhao.png" @click="reduce(pro_details)"></image></view>
						<view><text v-if="pro_details.itemgoods.quantity>0">{{pro_details.itemgoods.quantity}}</text></view>
						<view><image src="/static/tab/jia.png" @click="add(pro_details)"></image></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{pro_details:Object},
		methods:{
			close(){
				this.$parent.pop_upitem(false)
			},
			// 减号
			reduce(pro_details){
				console.log("38",pro_details);
				let {index,goods_index,cid,itemgoods} = pro_details
				this.$parent.reduce(index,goods_index,cid,itemgoods)
			},
			//加号
			add(pro_details){
				console.log("44",pro_details);
				let {index,goods_index,cid,itemgoods} = pro_details
				this.$parent.plus(index,goods_index,cid,itemgoods)
			}
		}
	}
</script>

<style scoped>
@import '../../../style/shadow.css';
.goods-image{
	width: 100%;
	height: 500rpx;
	position: relative;
}
.goods-image image:nth-child(1){
	display: block;
	width: 100%;
	height: 500rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
.goods-image image:nth-child(2){
	display: block;
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	top: 20rpx;
	right: 20rpx;
	border-radius: 50%;
}
.details-padd{
	padding: 20rpx 20rpx 0 20rpx;
}
.describe{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.details-quantity image{
	width: 50rpx;
	height: 50rpx;
	display: block;
}
.details-quantity{
	display: flex;
	align-items: center;
	width: 200rpx;
	justify-content: space-between;
}
.details-name{
	font-size: 35rpx;
	font-weight: bold;
}
.details-Thinning{
	font-size: 30rpx;
	color: #a4a4a4;
	padding: 20rpx 0;
}
.details-unit-price{
	font-size: 30rpx;
	color: #ec702d;
	display: flex;
	align-items: baseline;
}
.details-unit-price text:nth-child(2){
	font-size: 35rpx;
}
.details-unit-price text:nth-child(3){
	color: #999999 !important;
}
</style>