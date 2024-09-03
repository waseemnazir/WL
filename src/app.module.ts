import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configs } from './config';
import { DataSource } from 'typeorm';

import { HomeModule } from './home/home.module';

import { TypeOrmConfigService } from './database/typeorm-config.service';
import { MongoTypeOrmConfigService } from './database/mongo-typeorm-config.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    TypeOrmModule.forRootAsync({
      useClass: MongoTypeOrmConfigService,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    HomeModule,
    UsersModule,
  ],
})
export class AppModule {}
