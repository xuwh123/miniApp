import Taro from "@tarojs/taro";

import { Button, Text, View } from "@tarojs/components";
import "./index.less";

const handerFinishLogin = () => {
  Taro.redirectTo({
    url: "/pages/shopitem/index",
  });
};
const Index = () => {
  return (
    <View>
      <View className="shop-top">
        <View className="iconfont icon-icon-xiaomiguishu"></View>
        <View className="shop-top-title">
          <Text>小米商城</Text>
        </View>
        <View className="shop-top-text">
          <Text>让每个人都能享受科技的乐趣</Text>
        </View>
      </View>
      <View className="shop-bottom">
        <View className="shop-bottom-card">
          <View className="shop-bottom-card-text">
            <Text className="iconfont icon-shouji"></Text>
            <Text onClick={() => handerFinishLogin()}>
              一键绑定手机号码
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Index;
