import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BeforeInsert
} from "typeorm";
import { Order } from "./Order";
import { hashPassword } from "../utils/password";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    username!: string;

    @Column({
        type: "enum",
        enum: ["admin", "supplier", "customer"],
        default: "customer"
    })
    role!: "admin" | "supplier" | "customer";

    @Column({
        type: "enum",
        enum: ["pending", "active", "suspended"],
        default: "active"
    })
    status!: "pending" | "active" | "suspended";

    @OneToMany(() => Order, order => order.user)
    orders!: Order[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hashPassword(this.password);
    }
}