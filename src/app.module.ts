import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/admin/products/products.module';
import { DetailModule } from './modules/detail-page/detail.module';
import { indexModule } from './modules/index-page/index.module';
import { RendererModule } from './modules/renderer/renderer.module';

@Module({
  imports: [RendererModule, DetailModule, indexModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
