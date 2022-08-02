import { Module } from '@nestjs/common';
import { ConfigRootModule } from './config/index.module';
import { RootModule } from './modules/index.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
	imports: [RootModule, ConfigRootModule, FirebaseModule],
})
export class AppModule {}
