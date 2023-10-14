import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  createCustomer(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAllCustomers() {
    return `This action returns all customers`;
  }

  findOneCustomer(id: number) {
    return `This action returns a #${id} customer`;
  }

  updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
