import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getCustomers(): any {
    return [
      { id: 1, name: 'Mattew Days' },
      { id: 2, name: 'Jane Doe' },
    ];
  }

  @Get(':id')
  getCustomerById(@Param('id') id: number): any {
    return { id: Number(id) };
  }
}
