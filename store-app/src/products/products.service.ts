import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  createProduct(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAllProducts() {
    return `This action returns all products`;
  }

  findOneProduct(id: number) {
    return `This action returns a #${id} product`;
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  removeProduct(id: number) {
    return `This action removes a #${id} product`;
  }
}
