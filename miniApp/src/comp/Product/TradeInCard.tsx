import { View, Image, Text } from "@tarojs/components";

export default function TradeinCard(props: {
  info: {
    imgUrl: string;
    title: string;
    price: string;
    originalPrice?: string;
  };
}) {
  return (
    <View>
      <View className="trade-in-tabbar-right-card">
        <Image src={props.info.imgUrl} mode="aaspectFit" />
        <Text className="iconfont icon-xuanzefangkuang-morenbukedianji"></Text>
      </View>
      <View className="trade-in-tabbbar-right-text">
        <Text>{props.info.title}</Text>
      </View>

      <View className="trade-in-tabbar-right-item-price">
        <View className="trade-in-tabbar-right-item-currentprice">
          <Text>￥{props.info.price}</Text>
        </View>

        {props.info.originalPrice && (
          <View className="trade-in-tabbar-right-item-originalPrice">
            <Text>￥{props.info.originalPrice}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
