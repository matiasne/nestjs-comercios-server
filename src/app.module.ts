import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CategoriasModule } from './categorias/categorias.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/guards/roles.guard';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { ComerciosModule } from './comercios/comercios.module';
import { ClientesModule } from './clientes/clientes.module';
import { CtasCorrientesModule } from './ctas-corrientes/ctas-corrientes.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [
    CategoriasModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/prueba'),
    AuthModule,
    UsersModule,
    ComerciosModule,
    ClientesModule,
    CtasCorrientesModule,
    ProductosModule
    
  ],
  controllers: [AppController],
  providers: [LocalStrategy],
})
export class AppModule {}
