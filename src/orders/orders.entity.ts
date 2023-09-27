import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';


@Entity({name: 'orders'})
export class Order{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    clientName: string;

    @Column()
    request: string;
}