import { View, Image, Text, Swiper, SwiperItem } from "@tarojs/components";
import SpecialCard from "@/comp/Product/SpecialCard";

import "./index.less";
import img1 from "../../image/1.jpg";
import img2 from "../../image/2.jpg";
import img3 from "../../image/3.jpg";
import img4 from "../../image/4.jpg";
import img6 from "../../image/6.jpg";

import { useState } from "react";

function Top() {
  return (
    <View className="top">
      <View className="title">
        <Image src={img6} mode="aspectFill"></Image>
      </View>
      <View className="title-card">
        <View className="title-card-item">
          <View className="title-card-item-title">
            <View className="title-card-item-title-left">
              <Text>小米之家广东珠海香洲区人民东路专卖店</Text>
            </View>
            <View className="title-card-item-title-right">
              <View className="title-card-item-title-right-card">
                <Text className="iconfont icon-fenxiang"></Text>
                <View className="title-card-item-title-right-item">
                  <Text>分享</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="title-card-item-text1">
            <Text>到店自取</Text>
            <Text>门店闪送</Text>
          </View>
          <View className="title-card-item-text2">
            <Text>营业时间:9.30-21.30</Text>
          </View>
          <View className="title-card-item-text3">
            <View className="title-card-item-text3-left">
              <View className="title-card-item-text3-left-first">
                <Text>距您1.03km</Text>
                <Text>广东珠海市香洲区翠香街道</Text>
              </View>
              <View className="title-card-item-text3-left-second">
                <Text>广东省珠海市香洲区人民东路307号</Text>
              </View>
            </View>
            <View className="title-card-item-text3-right">
              <View className="title-card-item-text3-right-text1">
                <Text className="iconfont icon-ditu"></Text>
                <Text>地图</Text>
              </View>
              <View className="title-card-item-text3-right-text2">
                <Text className="iconfont icon-dianhua"></Text>
                <Text>电话</Text>
              </View>
            </View>
          </View>
          <View className="title-card-item-text4-icon">
            <View className="title-card-item-text4">
              <View className="title-card-item-text4-left">
                <Text className="left-text-price">￥</Text>
                <Text className="left-text-number">15</Text>
              </View>
              <View className="title-card-item-text4-right">
                <Text className="right-text">满减</Text>
                <View className="title-card-item-text4-button">
                  <Text className="button-text">领取</Text>
                </View>
              </View>
            </View>

            <View className="title-card-item-text4">
              <View className="title-card-item-text4-left">
                <Text className="left-text-price">￥</Text>
                <Text className="left-text-number">30</Text>
              </View>
              <View className="title-card-item-text4-right">
                <Text className="right-text">满减</Text>
                <View className="title-card-item-text4-button">
                  <Text className="button-text">领取</Text>
                </View>
              </View>
            </View>
            <View className="title-card-item-text4">
              <View className="title-card-item-text4-left">
                <Text className="left-text-price">￥</Text>
                <Text className="left-text-number">50</Text>
              </View>
              <View className="title-card-item-text4-right">
                <Text className="right-text">满减</Text>
                <View className="title-card-item-text4-button">
                  <Text className="button-text">领取</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="title-card-item-text5">
            <View className="title-card-item-text5-icon">
              <Text>官方门店</Text>
            </View>
            <View className="title-card-item-text5-icon">
              <Text>正品保障</Text>
            </View>
            <View className="title-card-item-text5-icon">
              <Text>满499闪送包邮</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function Sideshow() {
  const bannerImages = [img1, img2, img3];
  return (
    <View className="sideshow">
      <Swiper
        className="swiper"
        autoplay
        interval={4000}
        circular
        indicatorDots
      >
        {bannerImages.map((image, index) => (
          <SwiperItem key={index} className="swiper-item">
            <Image className="image" src={image} mode="aspectFill" />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
function Left({ onSelectCategory, selectedCategory }) {
  const categories = [
    "推荐",
    "今日特惠",
    "Xiaomi手机",
    "REDMI手机",
    "手机配件",
    "电脑平板",
    "智能穿戴",
    "电视",
    "冰洗橱柜",
    "小家电",
    "智能家居",
    "出行运动",
    "日用百货",
    "商城定制",
    "儿童用品",
  ];
  return (
    <View className="left">
      {categories.map((category, index) => (
        <View
          key={index}
          className={`left-title ${
            selectedCategory === category ? "selected" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          <Text>{category}</Text>
        </View>
      ))}
    </View>
  );
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("推荐");
  const [selectedFooter, setSelectedFooter] = useState("首页");
  const handleGoToHome = () => {
    setSelectedFooter("首页");
  };
  return (
    <View>
      {selectedFooter === "首页" && (
        <View>
          <Top></Top>
          <Sideshow></Sideshow>
          <View className="title">
            <View className="title-left">
              <Left
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              ></Left>
            </View>
            <View className="title-right">
              {selectedCategory === "推荐" && (
                <SpecialCard
                  info={{
                    imgUrl: img4,
                    imgtext: "",
                    text1: "XIAOMI Turbo 4",
                    text2: "设计好看,旗舰性能,超...",
                    title1: "自取",
                    title2: "自提",
                    currentPrice: 2199,
                    oldPrice: 2299,
                    shopCard: "去购买",
                  }}
                ></SpecialCard>
              )}
            </View>
          </View>
        </View>
      )}
      {selectedFooter === "购物车" && (
        <View>
          <View className="shop-top">
            <View className="shop-top-card">
              <View className="iconfont icon-gouwudai"></View>
            </View>
            <View className="shop-top-text1">
              <Text>购物车空空如也</Text>
            </View>
            <View className="shop-top-card2" onClick={handleGoToHome}>
              <Text>到门店首页逛逛</Text>
            </View>
          </View>
        </View>
      )}
      {selectedFooter === "我的" && (
        <View>
          <View className="myuser-top">
            <View className="myuser-top-card">
              <View className="iconfont icon-dengluyonghuming"></View>
            </View>
            <View className="myuser-top-text1">
              <Text>点击上传头像名称</Text>
              <Text>小米ID</Text>
            </View>
            <View className="myuser0top-text2">
              <Text>会员码</Text>
              <View className="iconfont icon-code"></View>
            </View>
          </View>
          <View className="card">
            <View className="card-item">
              <View className="card-item-text1">
                <Text>优惠卷</Text>
                <View className="card-item-text1-price">
                  <Text>0</Text>
                </View>
              </View>
              <View className="card-item-text2">
                <Text>红包</Text>
                <View className="card-item-text2-price">
                  <Text>0</Text>
                  <Text>元</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="card">
            <View className="icon-item">
              <View className="icon-item-text">
                <View className="iconfont icon-daifukuan"></View>
                <Text>待付款</Text>
              </View>
              <View className="icon-item-text">
                <View className="iconfont icon-daishouhuo"></View>
                <Text>待收货</Text>
              </View>
              <View className="icon-item-text">
                <View className="iconfont icon-daipingjia"></View>
                <Text>待评价</Text>
              </View>
              <View className="icon-item-text">
                <View className="iconfont icon-quanbudingdan"></View>
                <Text>全部订单</Text>
              </View>
            </View>
          </View>
          <View className="card">
            <View className="card-item-title">
              <View className="card-tilte">
                <Text>收货地址</Text>
                <Text>{">"}</Text>
              </View>
              <View className="card-tilte">
                <Text>在线客服</Text>
                <Text>{">"}</Text>
              </View>
              <View className="card-tilte">
                <Text>关于</Text>
                <Text>{">"}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
      <View className="footer">
        <View className="footer-item">
          <View
            className={`footer-item-icon ${
              selectedFooter === "首页" ? "selected" : ""
            }`}
            onClick={() => setSelectedFooter("首页")}
          >
            <View className="iconfont icon-yyhome2">
              <Text>首页</Text>
            </View>
          </View>
          <View
            className={`footer-item-icon ${
              selectedFooter === "购物车" ? "selected" : ""
            }`}
            onClick={() => setSelectedFooter("购物车")}
          >
            <View className="iconfont icon-xiaomigouwuche1">
              <Text>购物车</Text>
            </View>
          </View>
          <View
            className={`footer-item-icon ${
              selectedFooter === "我的" ? "selected" : ""
            }`}
            onClick={() => setSelectedFooter("我的")}
          >
            <View className="iconfont icon-mine">
              <Text>我的</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Index;
