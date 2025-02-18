import { Body, Controller, Post } from '@nestjs/common';
import { parseStringPromise, Builder } from 'xml2js';
import axios from 'axios';
import * as crypto from 'crypto';
import { Public } from 'src/decorators/public.decorator';
import { wechatpayConfig as confWechatpayConfig } from '../config';

@Controller('pay')
export class PaymentController {
  private wechatpayConfig = confWechatpayConfig;

  @Public()
  @Post('unifiedorder')
  async unfiedorder(@Body() body: any) {
    try {
      const timestamp = Math.floor(Date.now() / 1000);
      const params = {
        appid: this.wechatpayConfig.appId,
        mch_id: this.wechatpayConfig.mchId,
        nonce_str: Math.random().toString(36).substr(2, 15),
        body: body.productName,
        out_trade_no: body.orderNo,
        total_fee: body.totalFee,
        spbill_create_ip: body.ipAddress,
        notify_url: this.wechatpayConfig.notifyUrl,
        trade_type: 'JSAPI',
        openid: 'oAXBK5H38lebV-GhzsDO6yjP1HEw',
        sign_type: 'MD5',
      };

      // const res = wx.request(URL, method, Option);
      params['sign'] = this.generateSign(params, this.wechatpayConfig.key);
      let xml = this.buildXmlRequest(params);
      console.log(xml);

      const responseXml = await axios.post(
        'https://api.mch.weixin.qq.com/pay/unifiedorder',
        xml,
        {
          headers: {
            'Content-Type': 'application/xml',
          },
        },
      );
      const result = await parseStringPromise(responseXml.data, {
        explicitArray: false,
      });

      const data = result.xml;

      console.log('------------------>', data.return_code === 'SUCCESS');

      if (data.return_code === 'SUCCESS' && data.result_code === 'SUCCESS') {
        const prepayId = data.prepay_id;
        const pauParams = {
          appId: this.wechatpayConfig.appId,
          timeStamp: timestamp.toString(),
          nonceStr: params.nonce_str,
          package: `prepay_id=${prepayId}`,
          signType: 'MD5',
        };
        return {
          ...pauParams,
          paySign: this.generateSign(pauParams, this.wechatpayConfig.key),
        };
      } else {
        console.log(data);
        throw new Error(data.err_code_des || '支付失败');
      }
    } catch (error) {
      console.error('支付失败:', error);
      throw new Error(`支付失败: ${error.message}`);
    }
  }

  private generateSign(params, apiKey) {
    // 对参数进行排序
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((acc, key) => {
        if (params[key]) {
          acc[key] = params[key];
        }
        return acc;
      }, {});

    // 拼接参数
    let stringA = '';
    for (const key in sortedParams) {
      if (sortedParams.hasOwnProperty(key)) {
        stringA += `${key}=${sortedParams[key]}&`;
      }
    }

    // 拼接API密钥
    const stringSignTemp = `${stringA}key=${apiKey}`;

    // 生成签名
    const sign = crypto
      .createHash('md5')
      .update(stringSignTemp)
      .digest('hex')
      .toUpperCase();

    return sign;
  }

  private buildXmlRequest(params: any) {
    const builder = new Builder({
      rootName: 'xml',
      headless: true,
    });
    return builder.buildObject(params);
  }
}
