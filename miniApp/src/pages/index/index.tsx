import ProductCard from "@/comp/Product/ProductCard";

import { Swiper, SwiperItem, Image, Text, View } from "@tarojs/components";

import Taro, {
  usePullDownRefresh,
  useReachBottom,
  useShareAppMessage,
  useShareTimeline,
} from "@tarojs/taro";
import "./index.less";
import { useEffect, useState } from "react";
import request from "@/utils/request";
import img1 from "../../image/b1570923ba00834bcc2a3381b8c8797f(1).jpg";
import img2 from "../../image/45301ae059fd06c20db7fe339b390d54.jpg";
import img3 from "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg";
import img4 from "../../image/e0937b3c33789f4a0bd2d707336d56dc(1).jpg";
import img5 from "../../image/ef1c0c8acd29afa03b6fa286f7bdc84f(1).jpg";
import img6 from "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg";

function BannerImages() {
  const bannerImages = [img1, img2, img3, img4, img5, img6];
  useEffect(() => {
    request.get("/api/banner").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <View className="first-page">
        <Swiper
          className="swiper"
          autoplay
          interval={3000}
          circular
          indicatorDots
        >
          {bannerImages.map((image, index) => (
            <SwiperItem key={index} className="swiper-item">
              <Image src={image} mode="aspectFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
      <View className="ontab-text">
        <Text>官方商城</Text>
        <Text>正品保障</Text>
        <Text>满69包邮</Text>
      </View>
    </>
  );
}

function Navbar() {
  const navItems = [
    { icon: "../../image/3.jpg", text: "小米上新" },
    { icon: "../../image/2.jpg", text: "手机" },
    { icon: "../../image/3.jpg", text: "小米发布" },
    { icon: "../../image/6.jpg", text: "电视" },
    { icon: "../../image/3.jpg", text: "空冰洗" },
    { icon: "../../image/3.jpg", text: "智能穿戴" },
    { icon: "../../image/4.jpg", text: "小米众筹" },
    { icon: "../../image/4.jpg", text: "笔电平板" },
    {
      icon: "../../image/4.jpg",
      text: "生活电器",
    },
    { icon: "../../image/6.jpg", text: "智能家居" },
  ];
  return (
    <View className="card">
      <View className="tab-bar">
        {navItems.map((item, index) => (
          <View className="tab-bar-item" key={index}>
            <View className="tab-bar-item-icon">
              <Image src={item.icon} mode="aspectFit" />
            </View>
            <View className="tab-bar-item-text">
              <Text>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function ScrollViewH() {
  const handleNavigateToDetail = () => {
    Taro.navigateTo({
      url: "/pages/placeItem/index",
    });
  };
  const handerFinish = () => {
    Taro.switchTab({
      url: "/pages/place/index",
    });
  };
  const titlebar = [
    {
      text: "小米之家广东珠海香洲区人民...",
      image: "../../image/b1570923ba00834bcc2a3381b8c8797f(1).jpg",
      title: "Redmi K80",
      price: "￥2499起",
    },
    {
      text: "小米之家广东珠海香洲区优待...",
      image: "../../image/e0937b3c33789f4a0bd2d707336d56dc(1).jpg",
      title: "REDMI Book14 2025",
      price: "￥4599起",
    },
    {
      text: "小米之家广东珠海香洲区珠海...",
      image: "../../image/e0937b3c33789f4a0bd2d707336d56dc(1).jpg",
      title: "REDMI Book 16 2025",
      price: "￥4799起",
    },
    {
      text: "小米之家广东珠海香洲区大前...",
      image: "../../image/3.jpg",
      title: "REDMI K80",
      price: "￥2499起",
    },
    {
      text: "小米之家广东珠海香洲区前山...",
      image: "../../image/4.jpg",
      title: "REDMI K80 Pro",
      price: "￥3699起",
    },
    {
      text: "小米之家广东珠海香洲区佑里...",
      image: "../../image/45301ae059fd06c20db7fe339b390d54.jpg",
      title: "REDMI Buds 6 Pro",
      price: "￥399起",
    },
  ];
  return (
    <View className="card1">
      <View className="tab-bar-title-text">
        <Text>小米之家</Text>
        <Text onClick={() => handerFinish()}>更多 {">"}</Text>
      </View>
      <View className="scroll-view_H" scroll-x="true">
        {titlebar.map((item, index) => (
          <>
            <View
              className="scroll-view_H-item"
              key={index}
              onClick={() => handleNavigateToDetail()}
            >
              <View className="scroll-view_H-item-icon">
                <View className="scroll-view_H-item-text1">
                  <Text>{item.text}</Text>
                  <View className="scroll-view_H-item-text2">
                    <Text>到店自取</Text>
                    <Text>距您</Text>
                  </View>
                  <View className="scroll-view_H-item-text3">
                    <Image src={item.image} mode="aspectFit" />
                    <View>
                      <View className="scroll-view_H-item-text3-text1">
                        {item.title}
                      </View>
                      <View className="scroll-view_H-item-text3-text2"></View>
                      {item.price}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </>
        ))}
      </View>
    </View>
  );
}
function GoodsType() {
  const goodstitle = [
    {
      image: "../../image/4.jpg",
      text: "REDMI 50pro",
    },
    {
      image: "../../image/3.jpg",
      text: "小米公用对讲机..",
    },
    {
      image: "../../image/1.jpg",
      text: "小米note60Pro...",
    },
    {
      image: "../../image/6.jpg",
      text: "小米note60Pro...",
    },
  ];
  const chooseGoods = () => {
    Taro.navigateTo({
      url: "/pages/typeItem/index",
    });
  };
  return (
    <View className="card2">
      <View className="text1 ">
        <Text>新品好物</Text>
        <Text> 爆款排行</Text>
      </View>
      <View className="newGoods">
        {goodstitle.map((item, index) => (
          <View
            className="newGoods-item"
            key={index}
            onClick={() => chooseGoods()}
          >
            <Image src={item.image} mode="aspectFit" />
          </View>
        ))}
      </View>
      <View className="newGoods-item-text">
        {goodstitle.map((item, index) => (
          <View className="newGoods-item-text1" key={index}>
            <Text>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
function TypeName() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleGoodsTypeItemClick = (index: number) => {
    console.log(`goodsType item clicked:${index}`);
    setCurrentIndex(index);
  };
  const Typetitle = [
    { title: "精选", desc: "商品推荐" },
    { title: "手机", desc: "探索新科技" },
    { title: "家电", desc: "数码电器" },
    { title: "特惠", desc: "多买多省" },
    { title: "智能", desc: "AI家居" },
    { title: "生活", desc: "居家必备" },
  ];
  return (
    <View>
      <View className="goodstype-text" socrrl-x="true">
        <View className="goodsType">
          {Typetitle.map((item, index) => (
            <View
              className={`goodsType-item ${
                currentIndex === index ? " goodsType-item-active" : ""
              }`}
              key={index}
            >
              <View
                className="goodsType-item-title"
                key={index}
                onClick={() => handleGoodsTypeItemClick(index)}
              >
                <Text>{item.title}</Text>
              </View>
              <View className="goodsType-item-desc" key={index}>
                <Text>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Swiper className="title-swiper" circular current={currentIndex}>
        <ProductCard
          info={{
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1665739998.29414037.jpg",
            title: "小米巨能写中",
            price: "9.99",
          }}
        ></ProductCard>
        <ProductCard
          info={{
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1665739998.29414037.jpg",
            title: "小米巨能写中性笔10支装",
            price: "27",
            originalPrice: "29",
          }}
        ></ProductCard>
        <ProductCard
          info={{
            imgUrl:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1665739998.29414037.jpg",
            title: "小米巨能写中性笔10支装",
            price: "27",
            originalPrice: "29",
          }}
        ></ProductCard>
      </Swiper>
    </View>
  );
}

const Index = () => {
  usePullDownRefresh(() => {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1000);
  });
  useReachBottom(() => {
    console.log("加载更多");
  });
  useShareAppMessage(() => {
    return {
      title: "自定义转发标题",
      path: "/pages/index/index",
      imageUrl: "https://img.yzcdn.cn/vant/apple-1.jpg",
    };
  });
  useShareTimeline(() => {
    return {
      title: "自定义转发标题",
      path: "/pages/index/index",
      imageUrl: "https://img.yzcdn.cn/vant/apple-1.jpg",
    };
  });
  return (
    <>
      <BannerImages></BannerImages>
      <Navbar></Navbar>
      <ScrollViewH></ScrollViewH>
      <GoodsType></GoodsType>
      <TypeName></TypeName>
    </>
  );
};
export default Index;
