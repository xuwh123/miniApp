import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/UserService';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { DepartService } from './services/DepartService';
import { Department } from './entities/depart.entity';
import { DepartmentController } from './controllers/DepartController';
import { GoodsController } from './controllers/GoodsController';
import { GoodsService } from './services/GoodsService';
import { Goods } from './entities/goods.entity';
import { UploadController } from './controllers/UploadController';
import { GoodsImage } from './entities/goods-image.entity';
import { GoodsCategoryService } from './services/GoodsCategoryService';
import { GoodsCategory } from './entities/GoodsCategory.entity';
import { CategoryController } from './controllers/CategoryController';
import { PaymentController } from './controllers/PaymentController';


@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // 建议使用环境变量
      signOptions: { expiresIn: '60m' },
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User,Department,Goods,GoodsImage,GoodsCategory],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User,Department,Goods,GoodsImage,GoodsCategory,]),
  ],
  controllers: [AppController, AuthController, UserController, DepartmentController,GoodsController, UploadController, CategoryController,PaymentController],
  providers: [
    AppService,
    UserService,
    DepartService,
    GoodsService,
    GoodsCategoryService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

// 添加全局前缀配置
export const GlobalPrefix = 'api';
