import { View, Text } from "@tarojs/components";

import "./index.less";

const Index = () => {
  return (
    <View>
      <View className="top">
        <View className="top-card">
          <View className="iconfont icon-xiaomigouwuche"></View>
        </View>
        <View className="top-card-text1">
          <Text>购物车还是空的</Text>
        </View>
        <View className="top-card2">
          <View className="top-card2-text">
            <Text>到小米商城逛逛</Text>
          </View>
        </View>
      </View>
      <View className="footer">
        <View className="footer-text1">
          <View className="iconfont icon-quanxuan"></View>
          <Text>全选</Text>
        </View>
        <View className="footer-text2">
          <Text>合计</Text>
          <Text>(不含运费):</Text>
        </View>
        <View className="price">
          <Text>￥</Text>
          <Text>0</Text>
        </View>
        <View className="footer-card">
          <Text>结算</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;
