/*eslint-disable */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { photoProviders } from './photos.providers';
import { PhotoService } from './photos.service';
import { PhotosController } from './photos.controller';

@Module({
  controllers: [PhotosController],
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
})
export class PhotosModule {}
