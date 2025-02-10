import { View, Image, Text } from "@tarojs/components";

export default function SpecialCard(props: {
  info: {
    imgUrl: object;
    imgtext?: string;
    text1: string;
    text2: string;
    title1?: string;
    title2?: string;
    currentPrice: number;
    oldPrice: number;
    shopCard: string;
  };
}) {
  return (
    <View className="title-right-item">
      <View className="title-right-item-card">
        <Image src={props.info.imgUrl} mode="aspectFit" />
        {props.info.oldPrice && (
          <View className="title-right-item-card-text">
            <Text>直降{props.info.oldPrice - props.info.currentPrice}元</Text>
          </View>
        )}
      </View>
      <View className="title-right-item-text">
        <View className="title-right-item-text1">
          <Text>{props.info.text1}</Text>
        </View>
        <View className="title-right-item-text2">
          <Text>{props.info.text2}</Text>
        </View>
        <View className="title-right-ietm-text3">
          {props.info.title1 && (
            <View className="title-right-item-text3-title1">
              <Text>{props.info.title1}</Text>
            </View>
          )}
          {props.info.title2 && (
            <View className="title-right-item-text3-title2">
              <Text>{props.info.title2}</Text>
            </View>
          )}
        </View>
        <View className="price">
          <View className="price-line">
            <View className="current-price">
              <Text>￥{props.info.currentPrice}起</Text>
            </View>
            {props.info.oldPrice && (
              <View className="old-price">
                <Text>￥{props.info.oldPrice}</Text>
              </View>
            )}
          </View>
          <View className="shop-card">
            <Text>{props.info.shopCard}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
