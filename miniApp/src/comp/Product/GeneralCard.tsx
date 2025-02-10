import { View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

const handleNavigateToDetail = () => {
  Taro.navigateTo({
    url: "/pages/typeItem/index",
  });
};

export default function GeneralCard(props: {
    info: {
        imgUrl: string;
        title: string;
        price: string;
    };
}) {
    return (
        <View className="card" onClick={() => handleNavigateToDetail()}>
            <View className="card-item">
                <Image src={props.info.imgUrl} />
            </View>
            <View className="card-item-more">
                <View className="card-item-text">
                    <Text>{props.info.title}</Text>
                </View>
                <View className="card-item-price">
                    <Text>￥{props.info.price}</Text>
                </View>
            </View>
        </View>
    );
}
