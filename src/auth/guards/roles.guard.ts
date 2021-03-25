import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private readonly logger = new Logger(RolesGuard.name);

  canActivate(context: ExecutionContext,): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    let cleanToken = request.headers['authorization'].replace('Bearer','').trim();
    let res:any = jwt.verify(cleanToken, jwtConstants.secret)
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
  
    this.logger.log(request.params.comercioId+" "+requiredRoles)

    if (!requiredRoles) {
      return true;
    }   

    //El parametro de la ruta debe ser igual al comercio seleccionado para realizar acciones
    if(request.params.comercioId != res.comercioId){
      return false;
    }

    return requiredRoles.some((role) => res.rol?.includes(role));
   
    //  return true;
    
    
  }
}