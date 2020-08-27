import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public cria(@Body() usuario) {
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}