import { Text, View, Image } from "@tarojs/components";
import "./index.less";
import GeneralCard from "@/comp/Product/GeneralCard";
import ReguarCard from "@/comp/Product/ReguarCard";
import { useState } from "react";
import Taro from "@tarojs/taro";

function Left({ onSelectCategory, selectedCategory }) {
  const categories = [
    "推荐",
    "Xiaomi手机",
    "REDMI手机",
    "手机配件",
    "电脑平板",
    "智能穿戴",
    "电视",
    "空调",
    "冰洗厨电",
    "小家电",
    "智能家居",
    "出行运动",
    "车周边",
    "日用百货",
    "商城定制",
    "小米服务",
    "儿童用品",
    "有品精选",
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

function handleNavigateToDetail() {
Taro.navigateTo({
  url:'/pages/shopItem/index'
})
}
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("推荐");
  return (
    <View>
      <View className="Top">
        <Left
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        ></Left>
        <View className="right">
          {selectedCategory === "推荐" && (
            <View>
              <View
                className="right-top-photo"
                onClick={() => handleNavigateToDetail()}
              >
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-top-title">
                <Text>精品推荐</Text>
              </View>
              <GeneralCard
                info={{
                  imgUrl: "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                  title: "Redmi 14C",
                  price: "499起",
                }}
              ></GeneralCard>
              <GeneralCard
                info={{
                  imgUrl: "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                  title: "Redmi Buds 6 活力版",
                  price: "99",
                }}
              ></GeneralCard>
              <GeneralCard
                info={{
                  imgUrl: "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                  title: "小米手环9 Pro",
                  price: "399起",
                }}
              ></GeneralCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "网络配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Note ...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手机保护壳",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "双肩包",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "夜灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "REDMI k80",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "眼镜",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "充电宝",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电饭煲",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "600L以上",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "其他配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "500-600L",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "Xiaomi手机" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>Xiaomi数字旗舰</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Xiaomi MIX系列</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Xiaomi Civi</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Xiaomi手机套装</Text>
                </View>
              </View>
              <View className="right-bottom">
                <View className="right-bottom-title">
                  <Text>Xiaomi数字旗舰</Text>
                </View>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 15 Pro",
                    price: "5299起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 15 ",
                    price: "4499起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 15 定制版",
                    price: "4999",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 14 Ultra",
                    price: "5499起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 14 Pro",
                    price: "4599起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi 14 ",
                    price: "3999起",
                  }}
                ></GeneralCard>
                <View className="right-bottom-title">
                  <Text>Xiaomi MIX系列</Text>
                </View>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi MIX Fold 4",
                    price: "8999起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi MIX Flip ",
                    price: "5999起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi MIX Fold 3 ",
                    price: "6999起",
                  }}
                ></GeneralCard>
                <View className="right-bottom-title">
                  <Text>Xiaomi Civi</Text>
                </View>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi Civi 4 Pro",
                    price: "2599起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Xiaomi Civi 3 ",
                    price: "2099起",
                  }}
                ></GeneralCard>
                <View className="right-bottom-title">
                  <Text>Xiaomi手机套装</Text>
                </View>

                <ReguarCard
                  info={{
                    imgUrl:
                      "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                    title: "MIX Flip 随身...",
                  }}
                ></ReguarCard>
              </View>
            </View>
          )}

          {selectedCategory === "REDMI手机" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>K系列</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Note系列</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Turbo系列</Text>
                </View>
                <View className="right-Top-item">
                  <Text>数字系列</Text>
                </View>
              </View>
              <View className="right-bottom">
                <View className="right-bottom-title">
                  <Text>K系列</Text>
                </View>

                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "REDMI K80 Pro ",
                    price: "3699起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "REDMI K80  ",
                    price: "2499起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi K70 至尊版  ",
                    price: "2599起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi K70 pro  ",
                    price: "2999起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi K70   ",
                    price: "2299起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi K70E   ",
                    price: "1799起",
                  }}
                ></GeneralCard>
                <View className="right-bottom-title">
                  <Text>Note系列</Text>
                </View>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 14 Pro+  ",
                    price: "1899起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 14 Pro  ",
                    price: "1299起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 14 5G  ",
                    price: "1049起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 13 Pro  ",
                    price: "1299起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 13 5G  ",
                    price: "899起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi Note 12 5G  ",
                    price: "999起",
                  }}
                ></GeneralCard>
                <View className="right-bottom-title">
                  <Text>Turbo 系列</Text>
                </View>
                <ReguarCard
                  info={{
                    imgUrl:
                      "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                    title: "Turbo 4",
                  }}
                ></ReguarCard>
                <ReguarCard
                  info={{
                    imgUrl:
                      "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                    title: "Turbo 3",
                  }}
                ></ReguarCard>
                <View className="right-bottom-title">
                  <Text>数字系列</Text>
                </View>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi 14C  ",
                    price: "499起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi 13 5G  ",
                    price: "649起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi 12 5G  ",
                    price: "949起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi 12 C ",
                    price: "599起",
                  }}
                ></GeneralCard>
                <GeneralCard
                  info={{
                    imgUrl:
                      "../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg",
                    title: "Redmi 14R 5G  ",
                    price: "1099起",
                  }}
                ></GeneralCard>
              </View>
            </View>
          )}
          {selectedCategory === "手机配件" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>Xiaomi配件</Text>
                </View>
                <View className="right-Top-item">
                  <Text>Redmi手机配件</Text>
                </View>
                <View className="right-Top-item">
                  <Text>黑鲨游戏配件</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>Xiaomi配件</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "充电器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车充",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "游戏配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "数据线",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "无线充",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手机保护壳",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手机贴膜",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "充电宝",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "自拍杆",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>Redmi手机配件</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手机保护壳",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>黑鲨游戏配件</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "冰封散热背夹",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手柄肩键",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "移动电源",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "游戏耳机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "游戏键盘",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "游戏智能手表",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "黑鲨表带",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电竞指套",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能戒指",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "数据线",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "电脑平板" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>笔记本</Text>
                </View>
                <View className="right-Top-item">
                  <Text>平板</Text>
                </View>
                <View className="right-Top-item">
                  <Text>显示器</Text>
                </View>
                <View className="right-Top-item">
                  <Text>办公配件</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>笔记本</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "25年新品",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "商务办公",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "设计创作",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi轻薄本",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi游戏本",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>平板</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Pad 7...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Pad Pro",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平板6S Pro 1...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Pad SE",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平板键盘配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平板触控笔配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平板保护壳配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平板保护膜配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Pad 6系列",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>显示器</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "2024年新品",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "27英寸",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "23.8英寸",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "34英寸曲面",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "21.45英寸",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>办公配件</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "打印机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电纸书",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "键鼠",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "显示器挂灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "会议宝mini",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "存储卡u盘",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "其他配件",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "智能穿戴" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>近期上新</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能耳机</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能手表</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能手环</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>近期上新</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "REDMI Buds...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "REDMI Watc...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米手环9 Pro ",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能耳机</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "REDMI Buds... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Buds... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Buds 6 ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Buds 5 ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Buds 6S ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Buds ... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi 开放...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Buds... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Air 4 ...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "有线耳机 ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "项圈耳机 ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "耳机配件 ",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能手表</Text>
              </View>

              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "REDMI Watc... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Watc... ",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米腕部血压...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Watc...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi Watch 4",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Watc...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童手表",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手表配件",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能手环</Text>

                <View>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "小米手环9 Pro",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "Redmi 手环 3",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "小米手环9",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "小米手环9 NFC",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "小米手环8 Pr...",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "小米手环 8 Pro",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "Redmi 手环 2",
                    }}
                  ></ReguarCard>
                  <ReguarCard
                    info={{
                      imgUrl:
                        "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                      title: "手环配件",
                    }}
                  ></ReguarCard>
                </View>
              </View>
            </View>
          )}
          {selectedCategory === "电视" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>电视</Text>
                </View>
                <View className="right-Top-item">
                  <Text>激光投影</Text>
                </View>
                <View className="right-Top-item">
                  <Text>小米盒子</Text>
                </View>
                <View className="right-Top-item">
                  <Text>电视周边</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>电视</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "S Pro Mini LED",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "S Mini LED",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi X 202...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米S系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi A pro",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi A 202...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Redmi MAX",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米A竞技版",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米A系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米6至尊版",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米6 OLED",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米S Pro",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米ES Pro",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米A pro",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米ES系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米EA系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米透明电视",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>激光投影</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "激光电视",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "投影仪",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>小米盒子</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米盒子",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>电视周边</Text>
              </View>

              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电视音箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "其他配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "会员卡",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "空调" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>壁挂空调</Text>
                </View>
                <View className="right-Top-item">
                  <Text>立式空调</Text>
                </View>
                <View className="right-Top-item">
                  <Text>中央空调</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>壁挂空调</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "1.5匹挂机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "1匹挂机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "2匹/3匹挂机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "新风系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Pro系列",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>立式空调</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "3匹柜机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "2匹柜机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "5匹柜机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "新风系列",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Pro系列",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>中央空调</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "风管机 3匹 米...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "风管机PRO 3...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "风管机Pro 1.5...",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "冰洗厨电" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>洗衣机</Text>
                </View>
                <View className="right-Top-item">
                  <Text>冰箱</Text>
                </View>
                <View className="right-Top-item">
                  <Text>厨房大电</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>洗衣机</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "双区洗",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗烘一体机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "滚筒洗衣机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗烘套装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "迷你/内衣洗",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "波轮洗衣机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "烘干机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "冰洗套装",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>冰箱</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Pro双系统",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "超薄平嵌",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "十字对开门",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "法式门",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "对开门",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "两门三门",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "400L以下",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "400-500L",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "500-600L",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "600L以上",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "冷柜",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>厨房大电</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "烟灶套装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "净水器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吸油烟机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "燃气灶",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "集成灶",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗碗机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "蒸烤箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "热水器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "净水器滤芯",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "小家电" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>清洁电器</Text>
                </View>
                <View className="right-Top-item">
                  <Text>环境电器</Text>
                </View>
                <View className="right-Top-item">
                  <Text>厨房小电</Text>
                </View>
                <View className="right-Top-item">
                  <Text>个护电器</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>清洁电器</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "扫地机器人",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗地机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吸尘器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "除螨仪",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "挂烫机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "拖地机",
                }}
              ></ReguarCard>{" "}
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "擦地机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "扫地机配件",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吸尘器配件",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>环境电器</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电暖器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "加湿器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "除湿器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "两季扇子",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "空气净化器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "新风机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "空净滤芯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电风扇",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>厨房小电</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "净饮机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "饮水机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电水壶",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "养生壶",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "微蒸烤",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电饭煲",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电压力锅",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "空气炸锅",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "锅具",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电磁炉",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "料理机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "咖啡机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电热杯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "厨房工具",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>个护电器</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吹风机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "剃须刀",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "口腔护理",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "按摩仪",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "理发器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "足浴器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗手机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "直板夹",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "香氛机",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "智能家居" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>小爱音箱</Text>
                </View>
                <View className="right-Top-item">
                  <Text>路由器</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能安防</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能家装</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能控制</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能灯具</Text>
                </View>
                <View className="right-Top-item">
                  <Text>智能酷玩</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>小爱音箱</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Xiaomi Sound",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能音箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "家庭屏",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "触屏音箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "蓝牙音箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童音箱",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>路由器</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "WIFI 6",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "WiFi 7",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "千兆版",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "百兆版",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "全屋路由",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "网络配件",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能安防</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能门锁",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能门铃",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "摄像机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "保管箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "传感器",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能家装</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "晾衣架",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "窗帘",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "淋浴花洒",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "水龙头",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "浴霸",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能控制</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "插座",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "开关",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "网关",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能灯具</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "轨道灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吸顶灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "台灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "夜灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "灯泡",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "筒/射灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "显示器挂灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "氛围灯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "钢琴灯",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>智能酷玩</Text>
              </View>

              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "眼镜相机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "麦克风",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能鱼缸",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "宠物生活",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "CyberGear",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "CyberDog电...",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "出行运动" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>户外出行</Text>
                </View>
                <View className="right-Top-item">
                  <Text>运动健康</Text>
                </View>
                <View className="right-Top-item">
                  <Text>箱包</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>户外出行</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "滑板车",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "平衡车",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "卡丁车",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "对讲机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "充气宝",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗车机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手电筒",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>运动健康</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "健身器材",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "筋膜枪",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "体重秤",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>箱包</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "旅行箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "双肩包",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "胸包",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "车周边" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>通用品</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>通用品</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "SU7 Ultra 1:1...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "家用充电桩",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车载便携充放...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车载舒适头枕",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车载前风挡遮...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车载后备箱收...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "清洁套装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "户外蓝牙音箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "多功能强光手...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "车载k歌麦克风",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "小米对讲机3",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能香氛机-杯...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "香氛机替换芯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "Type-C转Ligh...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "6A双Type-C...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "6A双Type-C...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "SU7 1:18 合...",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "随手吸尘器",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "日用百货" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>家居日用</Text>
                </View>
                <View className="right-Top-item">
                  <Text>个人护理</Text>
                </View>
                <View className="right-Top-item">
                  <Text>防护清洁</Text>
                </View>
                <View className="right-Top-item">
                  <Text>床品家居</Text>
                </View>
                <View className="right-Top-item">
                  <Text>鞋服配饰</Text>
                </View>
                <View className="right-Top-item">
                  <Text>礼品周边</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>家居日用</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "雨伞",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "驱蚊器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "工具",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "推夹器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "水杯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "毛球修剪器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "垃圾收纳",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "插线板",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "转换器",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电池",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "签字笔",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "滤水壶滤芯",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>个人护理</Text>
              </View>

              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "血压针",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电子体温计",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "指甲刀",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "蒸汽眼罩",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "毛巾浴巾",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗脸巾",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>防护清洁</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "清洁湿巾",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗衣凝珠",
                }}
              ></ReguarCard>

              <View className="right-bottom-title">
                <Text>床品家居</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "床垫",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "枕头",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "沙发",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "水暖毯",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>鞋服配饰</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "眼镜",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "运动心电T恤",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "拖鞋",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>礼品周边</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "图书",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "盲盒",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "红包",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "商城定制" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>F会员专属</Text>
                </View>
                <View className="right-Top-item">
                  <Text>数码周边</Text>
                </View>
                <View className="right-Top-item">
                  <Text>服饰箱包</Text>
                </View>
                <View className="right-Top-item">
                  <Text>生活居家</Text>
                </View>
                <View className="right-Top-item">
                  <Text>文创礼品</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>F会员专属</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "折叠露营箱",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "潮流斜跨包",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>数码周边</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "清洁套装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "鼠标",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电竞鼠标垫",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制支架",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "笔记本贴纸",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "精修工具",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>服饰箱包</Text>
              </View>

              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制T恤",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制卫衣",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "帽子围巾",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制内胆包",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制单肩包",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制双肩包",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>生活居家</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制水杯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "办公套餐",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "厨卫用品",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制口罩",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制抱枕",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>文创礼品</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制礼盒",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制玩具",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "定制装饰品",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "小米服务" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>电池服务</Text>
                </View>
                <View className="right-Top-item">
                  <Text>安装服务</Text>
                </View>
                <View className="right-Top-item">
                  <Text>清洁保养</Text>
                </View>
                <View className="right-Top-item">
                  <Text>勘测服务</Text>
                </View>
                <View className="right-Top-item">
                  <Text>保障服务</Text>
                </View>
              </View>

              <View className="right-bottom-title">
                <Text>电池服务</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电池服务",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "滑板车电池",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>安装服务</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "吸顶灯安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "浴霸安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "开关安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "摄像机安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "轨道灯安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "猫眼安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "门铃安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "果蔬清洗机安装",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "电视移机",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>清洁保养</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "笔记本清洁",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "空调清洁",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "油烟机清洁",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "洗衣机清洁",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "空调检测",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>勘测服务</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "集成灶勘测",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "净烟机勘测",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>保障服务</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "保值换新",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "手机保障",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "儿童用品" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>儿童用品</Text>
                </View>
              </View>
              <View className="right-bottom-title">
                <Text>儿童用品</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童手表",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "益智玩具",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "液晶小黑板",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "词典笔",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "益智积木",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童滑板车",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童音箱",
                }}
              ></ReguarCard>
            </View>
          )}
          {selectedCategory === "有品精选" && (
            <View>
              <View className="right-top-photo">
                <Image
                  src="../../image/34e1aad7b0ca76545b89ba588990e782(1).jpg"
                  mode="aspectFill"
                ></Image>
              </View>
              <View className="right-Top" scroll-x="true">
                <View className="right-Top-item">
                  <Text>热卖好物</Text>
                </View>
                <View className="right-Top-item">
                  <Text>有品爆品</Text>
                </View>
                <View className="right-Top-item">
                  <Text>日常元素</Text>
                </View>
              </View>

              <View className="right-bottom-title">
                <Text>热卖好物</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "陶瓷泡茶杯",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "喷水拖把",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "超轻柔暖被",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能动感单车",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "剃须刀",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "智能按摩枕",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "男士高保湿霜",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "超声波清洗机",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "玻尿酸唇膏",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>有品爆品</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "厨房有品",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "按摩养生",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "个护美妆",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "日用文创",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "家纺家饰",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "首饰手表",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "儿童精选",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "运动出行",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "家具家装",
                }}
              ></ReguarCard>
              <View className="right-bottom-title">
                <Text>日常元素</Text>
              </View>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "发热围巾",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "时尚卫衣",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "鼻用纸",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "纸面巾",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "超情防晒衣",
                }}
              ></ReguarCard>
              <ReguarCard
                info={{
                  imgUrl: "../../image/40fd255deee6afe3af8f1eb7f4e6fc39(1).jpg",
                  title: "凉爽有型T恤",
                }}
              ></ReguarCard>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default Index;
