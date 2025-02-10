import ShopCard from "@/comp/ShopCard";

import { View, Image, Text } from "@tarojs/components";

import "./index.less";
import { useState } from "react";
import TypeCard from "@/comp/Product/TypeCard";

const Index = () => {
  const title = [
    { icon: "../../image/1.jpg", text: "充电器" },
    { icon: "../../image/2.jpg", text: "游戏配件" },
    { icon: "../../image/3.jpg", text: "车充" },
    { icon: "../../image/1.jpg", text: "数据线" },
    { icon: "../../image/2.jpg", text: "无线充" },
    { icon: "../../image/3.jpg", text: "手机保护壳" },
    { icon: "../../image/4.jpg", text: "充电宝" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTitleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <View>
      <View className="top-title" scroll-X="true">
        {title.map((item, index) => (
          <View
            className={`top-title-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={index}
            onClick={() => handleTitleClick(index)}
          >
            <Image src={item.icon} mode="aspectFit" />
            <Text>{item.text}</Text>
          </View>
        ))}
      </View>
      {selectedIndex === 0 && (
        <View>
          <ShopCard
            info={{
              imgurl: "../../image/1.jpg",
              title1: "小米67W充电器套装 轻享...",
              title2: "最高67W输出功率   |   Type—C接口数据线",
              currentprice: "89",
              originalPrice: "129",
              bottomtext1: "10101条评价",
              bottomtext2: "99%满意",
            }}
          ></ShopCard>
          <View className="shop-card">
            <View className="bottom-title">
              <View className="bottom-title-text">
                <Text>商品推荐</Text>
              </View>
            </View>
            <View className="card-title">
              <TypeCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  text1: "Xiaomi Pad 6 Max 磁吸双面保护壳",
                  text2: "Xiaomi Pad 6 Max 磁吸双面保护壳",
                  currentprice: 89,
                  originalPrice: 129,
                }}
              ></TypeCard>
              <TypeCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  text1: "Xiaomi Pad 6 Max 磁吸双面保护壳",
                  text2: "Xiaomi Pad 6 Max 磁吸双面保护壳",
                  currentprice: 89,
                  originalPrice: 129,
                }}
              ></TypeCard>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default Index;
