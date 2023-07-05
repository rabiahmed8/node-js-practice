import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("cars")
export class Car {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    carName: string

    @Column()
    modelYear: string

    @Column()
    price: number

}
