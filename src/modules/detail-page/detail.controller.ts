import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RendererService } from '../renderer/renderer.service';

import { ApiDetailService } from './detail.service';

@Controller('/')
export class DetailController {
  constructor(
    private readonly apiDeatilservice: ApiDetailService,
    private readonly renderer: RendererService
  ) {}

  @Get('/detail/:id')
  async handlerDetail(@Req() req: Request, @Res() res: Response): Promise<any> {
    this.renderer.render({
      req,
      res,
      service: this.apiDeatilservice,
    });
  }
}
