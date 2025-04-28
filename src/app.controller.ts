import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService : ConfigService,
  ) {}

  @Get()
  getHello() {
    const num1: number = 10;
    const num2: number = 20;
    console.log(this.configService.get<string>("PORT"));
    return this.appService.getHello(num1, num2);
  }
}
