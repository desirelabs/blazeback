import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'blaze',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ClientsModule,
    ProductsModule,
    AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
