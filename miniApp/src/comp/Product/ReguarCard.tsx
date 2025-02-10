import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function ReguarCard(props: {
  info: {
    imgUrl: string;
    title: string;
  };
}) {
  function handerFinish() {
    Taro.redirectTo({
      url: "/pages/shoptitle/index",
    });
  }
  return (
    <View
      className="second-card"
      onClick={() => {
        handerFinish();
      }}
    >
      <View className="second-card-item">
        <Image src={props.info.imgUrl} />
      </View>
      <View className="second-card-item-text">
        <Text>{props.info.title}</Text>
      </View>
    </View>
  );
}
