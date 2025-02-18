export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/type/index",
    "pages/place/index",
    "pages/shop/index",
    "pages/mine/index",
    "pages/placeItem/index",
    "pages/typeItem/index",
    "pages/shopitem/index",
    "pages/shoptitle/index",
    "pages/test",
    "pages/canvas",
    "pages/bindPhone",
  ],
  tabBar: {
    color: "#333",
    selectedColor: "#ff6600",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./image/tabbar/homePage.png",
        selectedIconPath: "./image/tabbar/homePage.png",
      },
      {
        pagePath: "pages/type/index",
        text: "分类",
        iconPath: "./image/tabbar/type.png",
        selectedIconPath: "./image/tabbar/type.png",
      },
      {
        pagePath: "pages/place/index",
        text: "小米之家",
        iconPath: "./image/tabbar/place.png",
        selectedIconPath: "./image/tabbar/place.png",
      },
      {
        pagePath: "pages/shop/index",
        text: "购物车",
        iconPath: "./image/tabbar/shop.png",
        selectedIconPath: "./image/tabbar/shop.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./image/tabbar/myself.png",
        selectedIconPath: "./image/tabbar/myself.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  permission: {
    "scope.userLocation": {
      desc: "您的位置将在小程序地图上显示",
    },
  },
  requiredPrivateInfos: ["getLocation", "chooseLocation"],
});
