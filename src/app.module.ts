import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandelConnectGateway } from './socket/handel-connect.gateway';

@Module({
  imports: [],
  controllers: [
    AppController,
    // CacheModule.register({
    //   store: redisStore,
    //   db: 1,
    //   url: process.env.REDIS_HOST,
    // }),
  ],
  providers: [AppService, HandelConnectGateway],
})
export class AppModule {}
