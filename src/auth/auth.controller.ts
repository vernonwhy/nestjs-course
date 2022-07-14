import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth') // ../auth/
export class AuthController {
    constructor(private authService: AuthService) {}

    // ../auth/signup/
    @Post('signup') 
    signup(@Body() dto: AuthDto) {
        console.log({
            dto,
        })
        return this.authService.signup(dto);
    }

    // ../auth/signin/
    @Post('signin')
    signin() {
        return this.authService.signin();
    }

}