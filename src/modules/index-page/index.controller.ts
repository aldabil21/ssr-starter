import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RendererService } from '../renderer/renderer.service';

import { ApiService } from './index.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly apiService: ApiService,
    private readonly rendererService: RendererService
  ) {}

  @Get('/')
  async handlerIndex(@Req() req: Request, @Res() res: Response): Promise<void> {
    console.log('index controller');
    this.rendererService.render({ req, res, service: this.apiService });
  }
}
