import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect } from "react";

function test() {
  useEffect(() => {
    console.log("useEffect");

    Taro.login().then((res) => {
      console.log(res);
      //red.code
      //api 调用 code
      //openid --> 数据库里面查找有没有这个用户
      // token 或者需要登陆
    });

  }, []);

  return (
    <View>
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
            timeStamp: "",
            nonceStr: "",
            package: "",
            signType: "MD5",
            paySign: "",
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
export default test;
