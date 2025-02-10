import { View, Image, Text } from "@tarojs/components";

export default function TypeCard(props: {
  info: {
    imgUrl: string;
    text1: string;
    text2: string;
    currentprice: number;
    originalPrice?: number;
  };
}) {
  return (
    <View className="card">
      <View className="card-item">
        <Image src={props.info.imgUrl} mode="aspectFill" />
        <View className="card-item-text1">
          <Text>{props.info.text1}</Text>
        </View>
        <View className="card-item-text2">
          <Text>{props.info.text2}</Text>
        </View>
        <View className="card-item-price">
          <View className="card-item-currentpirce">
            <Text>￥{props.info.currentprice}</Text>
          </View>
          {props.info.originalPrice && (
            <View className="card-item-originalpirce">
              <Text>￥{props.info.originalPrice}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
