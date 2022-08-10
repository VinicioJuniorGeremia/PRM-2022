import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";

export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    name: string;

    @Column('text', {nullable: true})
    description: string;

    @Column({nullable: false})
    price: number;

    @Column({nullable: false, length: 1})
    active: string;

    @ManyToOne(() => Category, {eager: true, nullable: false})
    category: Category;

    @ManyToOne(() => Brand, {eager: true, nullable: true})
    brand: Brand;

    @CreateDateColumn()
    createdAT: Date;

    @UpdateDateColumn()
    updatedAT: Date;
}
