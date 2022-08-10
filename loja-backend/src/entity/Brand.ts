import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    name: String;

    @CreateDateColumn()
    createdAT: Date;
    
    @UpdateDateColumn()
    updatedAT: Date;
}