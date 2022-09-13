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
  // 降级策略参考文档 http://doc.ssr-fc.com/docs/features$csr#%E5%A4%84%E7%90%86%20%E6%B5%81%20%E8%BF%94%E5%9B%9E%E5%BD%A2%E5%BC%8F%E7%9A%84%E9%99%8D%E7%BA%A7
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
