import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigRootModule } from './config/index.module';
import { RootModule } from './modules/index.module';

@Module({
  imports: [
    RootModule,
    ConfigRootModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
