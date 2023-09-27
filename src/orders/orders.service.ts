import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrdersService {

constructor(@InjectRepository(Order) private orderRepository:Repository<Order>){}


createOrder(order:CreateOrderDTO){

const newOrder = this.orderRepository.create(order);
return  this.orderRepository.save(newOrder);

}

getOrders(){
    return this.orderRepository.find();
}

}
