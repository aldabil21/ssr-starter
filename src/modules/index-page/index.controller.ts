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
    // 降级策略参考文档 http://doc.ssr-fc.com/docs/features$csr#%E5%A4%84%E7%90%86%20%E6%B5%81%20%E8%BF%94%E5%9B%9E%E5%BD%A2%E5%BC%8F%E7%9A%84%E9%99%8D%E7%BA%A7
    this.rendererService.render({ req, res, service: this.apiService });
  }
}
