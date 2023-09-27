import { Controller,Post,Body,Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {

    constructor(private orderService:OrdersService){}

@Get()
async getOrders(){
    return await this.orderService.getOrders();
}

 @Post()
 async createOrder(@Body() newOrder:CreateOrderDTO){
    return await this.orderService.createOrder(newOrder);
 }

}
