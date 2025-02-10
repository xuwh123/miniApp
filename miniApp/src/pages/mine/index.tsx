import { Swiper, SwiperItem, Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";
import ProductCard from "../../comp/Product/ProductCard";

import img1 from "../../image/tabbar/login.png";
import img2 from "../../image/tabbar/scan.png";

function Top() {
  return (
    <View className="top">
      <View className="top-first">
        <View className="top-left">
          <View className="card">
            <Image src={img1} className="login-img" />
          </View>
          <Text>登录/注册</Text>
        </View>
        <View className="top-right">
          <Text>到店扫码</Text>
          <Image src={img2} className="scan-img" />
        </View>
      </View>
      <View className="top-bottom">
        <View className="bottom-item">
          <Text className="iconfont icon-youhuijuan"></Text>
          <Text>优惠卷</Text>
        </View>
        <View className="bottom-item">
          <Text className="iconfont icon-hongbao"></Text>
          <Text>红包</Text>
        </View>
        <View className="bottom-item">
          <Text className="iconfont icon-huangguan"></Text>
          <Text>米金</Text>
        </View>
        <View className="bottom-item">
          <Text className="iconfont icon-Fma"></Text>
          <Text>F码</Text>
        </View>
      </View>
    </View>
  );
}
function Tabbar() {
  return (
    <View classNmae="tabbar">
      <View className="tabbar-item">
        <Image
          src="../../image/ef1c0c8acd29afa03b6fa286f7bdc84f(1).jpg"
          mode="aspectFill"
        ></Image>
        <View className="card1">
          <View className="tabbar-item-title">
            <View className="tabbar-item-title-text">
              <Text className="iconfont icon-daifukuan"></Text>
              <Text>待付款</Text>
            </View>
            <View className="tabbar-item-title-text">
              <Text className="iconfont icon-daishouhuo"></Text>
              <Text>待收货</Text>
            </View>
            <View className="tabbar-item-title-text">
              <Text className="iconfont icon-daipingjia"></Text>
              <Text>待评价</Text>
            </View>
            <View className="tabbar-item-title-text">
              <Text className="iconfont icon-qiandai"></Text>
              <Text>众筹抽奖</Text>
            </View>
            <View className="tabbar-item-title-text">
              <Text className="iconfont icon-quanbudingdan"></Text>
              <Text>全部订单</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function MyService() {
  return (
    <View>
      <View className="myService">
        <View className="title-text">
          <Text>我的服务</Text>
          <Text>查看更多{">"}</Text>
        </View>
        <View className="card2">
          <View className="card2-item">
            <View className="card-item-icon">
              <Text className="iconfont icon-xiaomi1"></Text>
              <Text>小米之家</Text>
            </View>
            <View className="card-item-icon">
              <Text className="iconfont icon-dibiao"></Text>
              <Text>服务网点</Text>
            </View>
            <View className="card-item-icon">
              <Text className="iconfont icon-sanceng"></Text>
              <Text>耗材服务</Text>
            </View>
            <View className="card-item-icon">
              <Text className="iconfont icon-huaban"></Text>
              <Text>在线说明书</Text>
            </View>
          </View>
          <View className="card2-item-second">
            <View className="card2-item-icon-second">
              <Text className="iconfont icon-a-zaixiankefu"></Text>
              <Text>在线客服</Text>
            </View>
            <View className="card2-item-icon-second">
              <Text className="iconfont icon-jiage"></Text>
              <Text>维修价格</Text>
            </View>
            <View className="card2-item-icon-second">
              <Text className="iconfont icon-col0"></Text>
              <Text>申请售后</Text>
            </View>
            <View className="card2-item-icon-second">
              <Text className="iconfont icon-huabanfuben"></Text>
              <Text>售后政策</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="card3">
        <View className="title-NovBar">
          <View className="title-NovBar-icon">
            <Text className="iconfont icon-shouhuodizhi"></Text>
            <Text>收货地址</Text>
          </View>
          <View className="title-NovBar-icon">
            <Text className="iconfont icon-wodeyouhuijuan"></Text>
            <Text>礼物码</Text>
          </View>
          <View className="title-NovBar-icon">
            <Text className="iconfont icon-xiaomi"></Text>
            <Text>关于</Text>
          </View>
          <View className="title-NovBar-icon">
            <Text className="iconfont icon-huabanfuben"></Text>
            <Text>售后政策</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const Index = () => {
  return (
    <View>
      <Top></Top>
      <Tabbar></Tabbar>
      <MyService></MyService>
      <View>
        <View className="recommend">
          <Text>商品推荐</Text>
        </View>
        {/* <View>
          <ProductCard
            info={{
              imgUrl: " ../../image/ef1c0c8acd29afa03b6fa286f7bdc84f(1).jpg",
              title: "小米巨能写中",
              price: "9.99",
            }}
          ></ProductCard>
        </View> */}
      </View>
    </View>
  );
};
export default Index;
