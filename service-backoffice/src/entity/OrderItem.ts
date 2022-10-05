import { Product } from './Product';
import { Order } from './Order';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderItem extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false})
    order: Order;

    @Column({nullable: false})
    product: Product;

    @Column({nullable: false})
    amount: number;

    @Column({nullable: false})
    value: number;

    @ManyToOne(() => Order, {eager: true, nullable: false})
    Order: Order;

}