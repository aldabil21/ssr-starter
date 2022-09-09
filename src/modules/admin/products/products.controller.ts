import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { render } from 'ssr-core-react';
import { RendererService } from '../../renderer/renderer.service';

@Controller('/admin/products')
export class ProductsController {
  constructor(private readonly renderer: RendererService) {}

  @Get('/')
  async index(@Req() req: Request, @Res() res: Response): Promise<any> {
    await this.renderer.render({ req, res });
  }
}
