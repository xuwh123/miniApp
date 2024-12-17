import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Public } from '../decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
