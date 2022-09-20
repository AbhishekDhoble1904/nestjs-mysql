import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AppController, AuthController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Abhi@91400002',
      database: 'abhishekdb',
      entities: [User],
      synchronize: true,
    }),
  ],
  // providers: [AppService]
})
export class AppModule {}
