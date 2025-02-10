import {
  Swiper,
  SwiperItem,
  Video,
  View,
  Image,
  Text,
} from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";
import TradeinCard from "@/comp/Product/TradeInCard";
import { useState } from "react";

function Container() {
  const VideoUrl = "https://v.qq.com/txp/iframe/player.html?vid=y03902y2j6g";
  const image = [
    "../../image/1.jpg",
    "../../image/2.jpg",
    "../../image/3.jpg",
    "../../image/4.jpg",
    "../../image/5.jpg",
    "../../image/6.jpg",
    "../../image/7.jpg",
    "../../image/8.jpg",
    "../../image/9.jpg",
    "../../image/10.jpg",
  ];
  return (
    <View className="container">
      <Swiper className="swiper" circular>
        <SwiperItem className="swiper-item">
          <Video
            className="video"
            src={VideoUrl}
            controls={false}
            loop
            muted
            objectFit="cover"
          />
        </SwiperItem>
        {image.map((img, index) => (
          <SwiperItem key={index} className="swiper-item">
            <View className="image-container">
              <Image className="image" src={img} mode="aspectFill" />
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}
function FirstCard() {
  return (
    <View className="card">
      <View className="card-item">
        <View className="first-text">
          <Text>￥5799</Text>
          <Text className="iconfont icon-xian-lingdang"></Text>
          <Text>降价提醒</Text>
        </View>
        <View className="card2">
          <View className="card2-item">
            <View className="card3">
              <Text>预计得579米金</Text>
            </View>
            <Text>更多优惠{">"}</Text>
          </View>
        </View>
        <View className="second-title">
          <Text>Xiaomi 15 Pro</Text>
        </View>
        <View className="second-text">
          <Text>①【徕卡影像新起点】 徕卡光学Summilux高速镜头</Text>
        </View>
        <View className="second-text">
          <Text>②【性能跃迁】 骁龙Ⓡ8至尊版移动平台|6100mAh大电池</Text>
        </View>
        <View className="second-text">
          <Text>③【智能升维】 小米澎湃OS 2|全生态AI助手 超级小爱</Text>
        </View>
      </View>
    </View>
  );
}
function SecondCard() {
  return (
    <View className="card">
      <View className="second-card-item">
        <View className="second-card-item-left">
          <Text className="iconfont icon-yonghuzhinan"></Text>
          <Text>选购指南</Text>
        </View>
        <View className="second-card-item-right" scroll-x="true">
          <View className="iconfont">
            <Text className=" icon-xingzhuang"></Text>
            <View className="right-title">
              <Text>CPU</Text>
            </View>
            <View className="title-content">
              <Text>骁龙8至尊版</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-camera"></Text>
            <View className="right-title">
              <Text>三摄像头</Text>
            </View>
            <View className="title-content">
              <Text>5000万像素...</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-quanpingmu"></Text>
            <View className="right-title">
              <Text>超大屏</Text>
            </View>
            <View className="title-content">
              <Text>6.73英寸</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-fenbianshuai"></Text>
            <View className="right-title">
              <Text>屏幕分辨率</Text>
            </View>
            <View className="title-content">
              <Text>3200X1440</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-gouwudaidaizishangcheng"></Text>
            <View className="right-title">
              <Text>极速畅玩</Text>
            </View>
            <View className="title-content">
              <Text>最高16GB</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-a-227"></Text>
            <View className="right-title">
              <Text>存储容量</Text>
            </View>
            <View className="title-content">
              <Text>最高1024GB</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-changdu"></Text>
            <View className="right-title">
              <Text>普通厚度</Text>
            </View>
            <View className="title-content">
              <Text>普通版8.35...</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className=" icon-dianchi"></Text>
            <View className="right-title">
              <Text>超长待机</Text>
            </View>
            <View className="title-content">
              <Text>6100mAh</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className="icon-yunyingshangtuoguanjiejuefangan"></Text>
            <View className="right-title">
              <Text>运营商网络</Text>
            </View>
            <View className="title-content">
              <Text>5G全网通</Text>
            </View>
          </View>
          <View className="iconfont">
            <Text className="icon-dianhuaka"></Text>
            <View className="right-title">
              <Text>网络模式</Text>
            </View>
            <View className="title-content">
              <Text>双卡双待</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function ThirdCard() {
  return (
    <View className="card">
      <View className="thirdCard">
        <View className="thirdItem">
          <View className="thirdCard-text1">
            <Text>活动</Text>
          </View>
        </View>
        <View className="thirdCard-title">
          <View className="thirdCard-text">
            <View className="text2-card">
              <View className="thirdCard-text2">
                <Text>超值换购</Text>
              </View>
            </View>
            <View className="thirdCard-text3">
              <Text>加24.5元得建议零售价29元AlwaySmar...</Text>
            </View>
            <View className="thirdCard-text4">
              <Text>{">"}</Text>
            </View>
          </View>

          <View className="thirdCard-text">
            <View className="text2-card">
              <View className="thirdCard-text2">
                <Text>新春礼遇</Text>
              </View>
            </View>
            <View className="thirdCard-text3">
              <Text>整点购机赢新春限定好礼</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function Delive() {
  return (
    <View className="card">
      <View className="delive-options">
        <View className="delive-options-text1">
          <View className="delive-options-text1-left">
            <Text>已选</Text>
          </View>
          <View className="delive-options-text1-right">
            <Text>Xiaomi 15 Pro 16GB+512GB 白色X1</Text>
            <Text>{">"}</Text>
          </View>
        </View>

        <View className="delive-option-text1-item-title">
          <Text>可选增值服务</Text>
        </View>
        <View className="delive-option-text1-item-title-item">
          <View className="delive-option-text1-item-title-card">
            <Image src={"../../image/3.jpg"} mode="aspectFit" />
          </View>
          <View className="delive-option-text1-item-title-card">
            <Image src={"../../image/3.jpg"} mode="aspectFit" />
          </View>
          <View className="delive-option-text1-item-title-card">
            <Image src={"../../image/3.jpg"} mode="aspectFit" />
          </View>
          <View className="delive-option-text1-item-title-card">
            <Image src={"../../image/3.jpg"} mode="aspectFit" />
          </View>
          <View className="delive-option-text1-item-title-card">
            <Text>共4种颜色选择</Text>
          </View>
        </View>
        <View className="deleve-option-text2">
          <View className="delive-options-text1-left">
            <Text>地址</Text>
          </View>
          <View className="delive-options-text2-right">
            <View className="delive-options-text2-right-title">
              <Text>北京</Text>
              <Text>北京市</Text>
              <Text>海淀区</Text>
              <Text>清河街道</Text>
              <Text>{">"}</Text>
            </View>
          </View>
        </View>
        <View className="delive-options-item-choose">
          <View className="delive-options-choose">
            <View className="delive-options-choose1">
              <Text className="iconfont icon-gouwudai"></Text>
              <View className="delive-options-choose1-title">
                <Text>商城配送</Text>
                <Text>满69元包邮</Text>
              </View>
            </View>
          </View>

          <Text className="iconfont icon-xuanze"></Text>
        </View>
        <View className="delive-options-item-choose">
          <View className="delive-options-choose1">
            <Text className="iconfont icon-shansong "></Text>
            <View className="delive-options-choose1-title">
              <Text>门店闪送</Text>
              <Text>闪送小时达,运费10元起</Text>
            </View>
          </View>

          <Text className="iconfont icon-xuanze"></Text>
        </View>
        <View className="delive-options-item-choose">
          <View className="delive-options-choose1">
            <Text className="iconfont icon-gouwudai"></Text>
            <View className="delive-options-choose1-title">
              <Text>到点自取</Text>
              <Text>逛商场不排队</Text>
            </View>
          </View>

          <Text className="iconfont icon-xuanze"></Text>
        </View>
        <View className="delive-options-item-content">
          <View className="delive-options-text1-left">
            <Text>服务</Text>
          </View>
          <View className="delive-option-item-content-right-text">
            <View className="delive-option-item-content-right">
              <Text className="iconfont icon-xuanze-fangkuang"></Text>
              <Text>小米自营</Text>
              <Text className="iconfont icon-xuanze-fangkuang"></Text>
              <Text>发货说明</Text>
              <Text className="iconfont icon-xuanze-fangkuang"></Text>
              <Text>到点自取</Text>
              <Text className="iconfont icon-xuanze-fangkuang"></Text>
              <Text>门店闪送</Text>
              <Text>{">"}</Text>
            </View>
            <View className="delive-option-item-content-right-second">
              <Text className="iconfont icon-xuanze-fangkuang"></Text>
              <Text>七天无理由退货(门店闪送,自取拆封后不支持)</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function Trade() {
  return (
    <View className="card">
      <View className="trade-in">
        <View className="trade-in-title">
          <Text>搭配Go</Text>
          <Text>随心配</Text>
        </View>
        <View className="trade-in-tabbar">
          <View className="trade-in-tabbar-left">
            <View className="trade-in-left-card">
              <Image src="../../image/4.jpg" mode="aspectFit" />
              <Text>Xiaomi 15 p...</Text>
            </View>
          </View>
          <View className="trade-in-tabbar-right">
            <View className="swiper">
              <View className="trade-in-tabbar-right-item" scroll-x="true">
                <View className="tradeinCard-type">
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/4.jpg",
                      title: "Xiaomi 15...",
                      price: "49",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                  <TradeinCard
                    info={{
                      imgUrl: "../../image/5.jpg",
                      title: "Xiaomi 15 P...",
                      price: "79",
                      originalPrice: "99",
                    }}
                  ></TradeinCard>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="trade-in-bottom">
          <View className="trade-in-bottom-card">
            <View className="trade-in-bottom-card-text">
              <Text>搭配购买</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function Contont({ onSelectCategory, setSelectedCategory }) {
  const categories = ["商品介绍", "商品参数"];
  return (
    <View className="contont-text">
      {categories.map((category, index) => (
        <View
          key={index}
          className={`contont-text${
            setSelectedCategory === category ? "selected" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          <Text>{category}</Text>
        </View>
      ))}
    </View>
  );
}

//
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("商品介绍");
  return (
    <View>
      <Container></Container>
      <FirstCard></FirstCard>
      <SecondCard></SecondCard>
      <ThirdCard></ThirdCard>
      <Delive></Delive>
      <Trade></Trade>
      <View className="card5">
        <Contont
          onSelectCategory={setSelectedCategory}
          setSelectedCategory={selectedCategory}
        ></Contont>
        {selectedCategory === "商品介绍" && <View></View>}
      </View>
      <View className="footer">
        <View className="footer-left">
          <View className="footer-left-item">
            <Text className="iconfont icon-yyhome2"></Text>
            <Text>首页</Text>
          </View>
          <View className="footer-left-item">
            <Text className="iconfont icon-kefu"></Text>
            <Text>客服</Text>
          </View>
          <View className="footer-left-item">
            <Text className="iconfont icon-xiaomigouwuche"></Text>
            <Text>购物车</Text>
          </View>
        </View>
        <View className="footer-right">
          <View className="footer-right-item">
            <View className="footer-right-item-card1">
              <Text>加入购物车</Text>
            </View>
          </View>
          <View className="footer-right-item">
            <View className="footer-right-item-card2">
              <Text>立即购买</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Index;
