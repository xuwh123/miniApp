import { View, Text, Image } from "@tarojs/components";

export default function ShopCard(props: {
  info: {
    imgurl: string;
    title1: string;
    title2: string;
    currentprice: string;
    originalPrice?: string;
    bottomtext1: string;
    bottomtext2: string;
  };
}) {
  return (
    <View className="shop-card">
      <View className="shop-card-item">
        <View className="shop-card-item-left">
          <Image src={props.info.imgurl} mode="aspectFit" />
        </View>
        <View className="shop-card-item-right">
          <View className="shop-card-item-right-title1">
            <Text>{props.info.title1}</Text>
          </View>
          <View className="shop-card-item-right-title2">
            <Text>{props.info.title2} </Text>
          </View>
          <View className="shop-card-item-right-price">
            <View className="curremt-Price">
              <Text>￥{props.info.currentprice}</Text>
            </View>
            {props.info.originalPrice && (
              <View className="original-Price">
                <Text>￥{props.info.originalPrice}</Text>
              </View>
            )}
          </View>
          <View className="shop-card-item-bottom">
            <Text>{props.info.bottomtext1}</Text>
            <Text>{props.info.bottomtext2}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
