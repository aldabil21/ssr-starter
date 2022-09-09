import { Injectable } from '@nestjs/common';
import { render } from 'ssr-core-react';
import { Request, Response } from 'express';

type RendererContext<T> = {
  req: Request;
  res: Response;
  service?: T;
};

@Injectable()
export class RendererService {
  async render<T>(ctx: RendererContext<T>) {
    const { req, res, service } = ctx;
    try {
      const stream = await render(
        { request: req, response: res, service },
        {
          stream: true,
        }
      );
      stream.pipe(ctx.res, { end: false });
      stream.on('error', async (err) => {
        console.log('ssr error', err);
        stream.destroy();
        const csrStream = await render(ctx, {
          stream: true,
          mode: 'csr',
        });
        csrStream.pipe(ctx.res, { end: false });
        csrStream.on('end', () => {
          ctx.res.end();
        });
      });
      stream.on('end', () => {
        ctx.res.end();
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
