import { ArgumentsHost, Catch, ConflictException, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {

   private status:any
   private response:any

  catch(exception: MongoError, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    this.response = ctx.getResponse();
    const request = ctx.getRequest();

    this.status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
        

    switch (exception.code) {
      case 11000:
        this.responseMessage(409,"Comercio already exist");
    }
  }

  responseMessage(code, message){
        return this.response.status(this.status).json({
            statusCode: code,            
            message: [message],
        });
    };
}