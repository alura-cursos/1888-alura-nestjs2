import { Controller, Post, Body, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario, @Res() res) {
        // 'Location', '/users/maria'
        const usuarioCriado = this.usuarioService.cria(usuario);
        res.status(HttpStatus.CREATED)
            .location(`/users/${usuarioCriado.nomeDeUsuario}`)
            .json(usuarioCriado);

        // return usuarioCriado;
    }
}