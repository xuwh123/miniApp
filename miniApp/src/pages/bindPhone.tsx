import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";

const BindPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleGetPhoneNumber = (e: any) => {
    if (e.detail.errMsg === "getPhoneNumber:ok") {
      const encrypteData = e.detail.encryptedData;
      const iv = e.detail.iv;

      Taro.request({
        url: "/api/bindPhone",
        method: "POST",
        data: {
          encrypteData,
          iv,
        },
      })
        .then((response) => {
          console.log("绑定成功", response.data);
          setPhoneNumber(response.data.phoneNumber);
          setError(null);
        })
        .catch((err) => {
          console.error("绑定失败", error);
          setError("绑定失败，请稍后再试");
        });
    } else {
      console.log("获取手机号失败", e.detail.errMsg);
      setError("用户拒绝授权");
    }
  };
  return (
    <View>
      <Button
        openType="getPhoneNumber"
        onGetPhoneNumber={handleGetPhoneNumber}
        className="button"
      >
        授权绑定手机号
      </Button>
      {phoneNumber && <View>已绑定手机号：{phoneNumber}</View>}
      {error && <View>{error}</View>}
    </View>
  );
};
export default BindPhone;
