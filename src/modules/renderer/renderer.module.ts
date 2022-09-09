import { Global, Module } from '@nestjs/common';
import { RendererService } from './renderer.service';

@Global()
@Module({
  exports: [RendererService],
  providers: [RendererService],
})
export class RendererModule {}
