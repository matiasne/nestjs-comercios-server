import { Module } from '@nestjs/common';
import { ComerciosService } from './comercios.service';
import { ComerciosController } from './comercios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comercio, ComercioSchema } from './schema/comercio.schema';
import { jwtConstants } from 'src/auth/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comercio.name, schema: ComercioSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [ComerciosController],
  providers: [ComerciosService]
})
export class ComerciosModule {}
