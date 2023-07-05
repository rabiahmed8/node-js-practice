import { AbstractRepository, Any, Entity, EntityRepository, Repository } from "typeorm";

// import { connection } from "../src/data-source"
import { Car } from "../entity/Car";
import { CarCreateDTO } from "../DTOs/dto";
import { CarUpdateDTO } from "../DTOs/dto";

@EntityRepository(Car)

export class CarRepo extends Repository<Car>{

    customSave(carCreateDTO:CarCreateDTO){
        const car = this.create({
            carName: carCreateDTO.carName,
            modelYear: carCreateDTO.modelYear,
            price: carCreateDTO.price
        });
        return this.save(car);
        // (carCreateDTO as any).asdzxc="asdxzc"
    }

    async updateAndReturn(id:number,carUpdateDTO:CarUpdateDTO): Promise<any | undefined>{


        // const carUpdate = this.create({
        //     id:carUpdateDTO.id,
        //     carName: carUpdateDTO.carName,
        //     modelYear: carUpdateDTO.modelYear,
        //     price: carUpdateDTO.price
        // })
        // return this.createQueryBuilder()
        // .update(carUpdate)
        // .set(carUpdate)
        // .where("id = :id", { id: id })
        // .execute()
        let carUpdate=await this.findOne(id)
        carUpdate.carName=carUpdateDTO.carName
        carUpdate.modelYear=carUpdateDTO.modelYear
        carUpdate.price=carUpdateDTO.price

        // carUpdate.id=id
        
        await this.save(carUpdate)
        return this.findOne(id)
    }


}

