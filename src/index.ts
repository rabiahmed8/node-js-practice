// import { AppDataSource } from "./data-source"
// import { Cars } from "./entity/Car"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new cars into the database...")
//     const cars = new Cars()
//     cars.carName = "Timber"
//     cars.modelYear = "Saw"
//     cars.price = 25
//     await AppDataSource.manager.save(cars)
//     console.log("Saved a new cars with id: " + cars.id)

//     console.log("Loading carss from the database...")
//     const carss = await AppDataSource.manager.find(Cars)
//     console.log("Loaded cars: ", carss)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
