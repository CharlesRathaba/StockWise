import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("orders")
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    // Other properties like order details, etc.

    @ManyToOne(() => User, user => user.orders)
    user!: User;
}
