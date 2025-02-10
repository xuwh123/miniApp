import { useEffect, useState } from "react";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

function Top({
  onTabClick,
}: {
  onTabClick: (tabIndex: number) => void;
  activeTab: number;
}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <View className="top">
      <View
        className={`card1 ${activeTab === 0 ? "active" : ""}`}
        onClick={() => onTabClick(0)}
      >
        <Text>小米之家</Text>
      </View>
      <View
        className={`card1 ${activeTab === 1 ? "active" : ""}`}
        onClick={() => onTabClick(1)}
      >
        <Text>服务中心</Text>
      </View>
    </View>
  );
}
const stores = [
  {
    id: 0,
    name: "小米之家广东中山石歧万象汇专卖店",
    lat: 23.022505,
    lon: 133.358861,
  },

  {
    id: 1,
    name: "小米之家广东中山利和广场店",
    lat: 23.032505,
    lon: 133.368861,
  },
];

function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

const Index = () => {
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [distances, setDistances] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  useEffect(() => {
    Taro.getLocation({
      type: "wgs84",
      success: (res) => {
        setUserLocation({ lat: res.latitude, lon: res.longitude });
      },
      fail: (err) => {
        console.error("获取位置失败", err);
      },
    });
  }, []);
  useEffect(() => {
    if (userLocation) {
      const calculatedDistances = stores.map((store) => {
        return getDistance(
          userLocation.lat,
          userLocation.lon,
          store.lat,
          store.lon
        );
      });
      setDistances(calculatedDistances);
    }
  }, [userLocation]);

  const handleNavigateToDetail = (storeId: number) => {
    Taro.navigateTo({
      url: `/pages/placeItem/index?storeId=${storeId}`,
    });
  };

  return (
    <View>
      <Top onTabClick={setActiveTab} activeTab={activeTab}></Top>
      {activeTab === 0 && (
        <View>
          {stores.map((store, index) => {
            return (
              <View className="card" key={store.id}>
                <View className="card-item">
                  <View className="card-left">
                    <View className="card-left-text1">
                      <Text>{store.name}</Text>
                    </View>
                    <View className="card-left-text2">
                      <Text>到店自取</Text>
                      <Text>门店闪送</Text>
                      <Text>产品维修</Text>
                    </View>
                    <View className="card-left-text3">
                      <Text>
                        广东中山市中山市石岐区孙文东路28号石歧万象汇G109商铺
                      </Text>
                    </View>
                    <View className="card-left-text4">
                      <Text>营业时间:10:00-22:00</Text>
                      <Text className="iconfont icon-ditu"></Text>
                      <Text className="iconfont icon-dianhua"></Text>
                    </View>
                  </View>
                  <View className="card-right">
                    <View className="card-right-text1">
                      <Text>距离最近</Text>
                    </View>

                    <View
                      className="card-right-text2"
                      onClick={() => handleNavigateToDetail(store.id)}
                    >
                      <Text> 进店选购</Text>

                      <Text>{distances[index]?.toFixed(2)}km</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
      {activeTab === 1 && <View>222</View>}
    </View>
  );
};
export default Index;
