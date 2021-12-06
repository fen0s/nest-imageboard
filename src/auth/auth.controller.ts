import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from "./auth.service"
@Controller("api")
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("login")
    async login(@Body() body){
        
        let token: string = await this.authService.validate(body.login, body.password)
        return {token: token}
    }
}
