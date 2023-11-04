import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { PhotoService } from './photos.service';
import { Photo } from './entities/photo.entity';
// import { CreatePhotoDto } from './dto/create-photo.dto';
// import { UpdatePhotoDto } from './dto/update-photo.dto';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotoService) {}

  // @Post()
  // create(@Body() createPhotoDto: CreatePhotoDto) {
  //   return this.photosService.create(CreatePhotoDto);
  // }

  @Post()
  create(@Body() photo: Photo) {
    return this.photosService.create(photo);
  }

  @Get()
  findAll() {
    return this.photosService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.photosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
  //   return this.photosService.update(+id, UpdatePhotoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.photosService.remove(+id);
  // }
}
