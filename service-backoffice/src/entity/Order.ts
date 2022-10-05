import { Customer } from './Customer';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 50})
    customer: Customer;

    @CreateDateColumn({nullable: false})
    orderDate: Date;

    @CreateDateColumn()
    invoicedDate: Date;

    @CreateDateColumn()
    canceledDate: Date;

    @ManyToOne(() => Customer, {eager: true, nullable: false})
    Customer: Customer;
    
}