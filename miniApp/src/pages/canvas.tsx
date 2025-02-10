import { View, Button, Canvas } from "@tarojs/components";
import { useRef } from "react";
import Taro from "@tarojs/taro";

const SharePoster = () => {
  const canvasRef = useRef(null);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  const generateShareImage = async () => {
    const query = Taro.createSelectorQuery();
    query
      .select("#shareCanvas")
      .fields({ node: true, size: true })
      .exec(async (res) => {
        console.log(res);
        const canvas = res[0].node;
        const ctx = canvas.getContext("2d");
        const dpr = Taro.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr);

        // 绘制背景
        ctx.fillStyle = "#f5f5f5";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 绘制文本
        ctx.font = "30px Arial";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.fillText("分享海报", 100, 50);

        try {
          const img = await loadImage("");
          ctx.drawImage(
            img,
            (canvas.width - img.width) / 2,
            100,
            img.width,
            img.height
          );

          // 将Canvas内容转换为图片
          canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height,
            destWidth: canvas.width,
            destHeight: canvas.height,
            fileType: "png",
            quality: 1,
            success: (result) => {
              console.log(result.tempFilePath);
              // 这里可以将tempFilePath保存或显示在页面上
            },
            fail: (err) => {
              console.error("生成图片失败", err);
            },
          });
        } catch (err) {
          console.error("图片加载失败", err);
        }
      });
  };

  return (
    <View>
      <Button onClick={generateShareImage}>生成分享图片</Button>
      <Canvas
        type="2d"
        canvasId="shareCanvas"
        id="shareCanvas"
        style={{ width: "600px", height: "400px" }}
        ref={canvasRef}
      />
    </View>
  );
};

export default SharePoster;
