import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(private readonly ProductsService: ProductsService) {}
 
  @Get()
  root() {
    return 'Hola mundo'
  }
}
