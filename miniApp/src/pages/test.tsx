import request from "@/utils/request";
import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect } from "react";

function TestPage() {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  const handleLogin = () => {
    Taro.login().then((res) => {
      console.log(res);
      if (res.code) {
        request
          .get("/api/auth/currentUser2", { code: res.code })
          .then((response) => {
            // console.log("登录成功", response.data);
            // if (response.data.success) {
            //   Taro.setStorageSync("token", response.data.token);
            // } else if (response.data.needBindPhone) {
            //   Taro.navigateTo({
            //     url: "/pages/bindPhone/index",
            //   });
            // }
          })
          .catch((error) => {
            console.error("登录失败", error);
          });
      } else {
        console.error("登录失败", res);
      }
    });
  };
  return (
    <View>
      <Button className="button" onClick={handleLogin}>
        登录
      </Button>

      <Button
        className="button"
        openType="chooseAvatar"
        onGetPhoneNumber={(e) => {
          console.log("onGetPhoneNumber", e);
        }}
      >
        按钮
      </Button>

      <Button
        onClick={() => {
          Taro.chooseLocation({}).then((res) => {
            console.log(res);
          });
        }}
      >
        地图
      </Button>

      <Button
        onClick={() =>
          // request  /api/order/submit {productId: "", num: 1,price:100,address:''}
          // oderId + 支付需要的参数
          Taro.requestPayment({
            timeStamp: "1739782282",
            nonceStr: "cbx0lqrixzo",
            package: "prepay_id=wx17165123727860484246fe243626be0001",
            signType: "MD5",
            paySign: "015901787B7DBB42323D5F43274C560E",
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        支付
      </Button>
    </View>
  );
}
export default TestPage;
