import { NestFactory } from '@nestjs/core';
import { AppModule, GlobalPrefix } from './app.module';
// import { TransformInterceptor } from './interceptors/transform.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(GlobalPrefix);
  // app.useGlobalInterceptors(new TransformInterceptor());

  // 配置静态文件服务
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',  // 访问路径前缀
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
