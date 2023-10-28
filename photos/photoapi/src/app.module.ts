import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [PhotosModule, DatabaseModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
