import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function ProductCard(props: {
  info: {
    imgUrl: string;
    title: string;
    price: string;
    originalPrice?: string;
  };
}) {
  const handleFinish=()=>{
    Taro.navigateTo({
      url:"/pages/typeItem/index"
    })
  }
  return (
    <View className="card3" onClick={()=>handleFinish()}>
      <View className="goodsCentent">
        <Image src={props.info.imgUrl} mode="aspectFill" />
        <View className="goodsCentent-text">
          <Text>{props.info.title}</Text>
        </View>
        <View className="goodsCentent-current-price">
          <Text>￥{props.info.price}</Text>
        </View>
        {props.info.originalPrice && (
          <View className="goodsCentent-original-price">
            <Text>￥{props.info.originalPrice}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
