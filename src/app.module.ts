import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
