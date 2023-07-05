import { Request, Response, Router } from 'express';
import { CarRepo } from '../repo/CarRepository';
import { getCustomRepository, getRepository } from 'typeorm';
import { Car } from '../entity/Car';

const router = Router()

router.post('/customrep', async function(req: Request, res: Response) {

    const data = req.body;
  
    // const car = new Car()

  
    // const userRepository = AppDataSource.getRepository(Car)
    // const newcar = await userRepository.save(car)
    
    const userRepository = getCustomRepository(CarRepo);
    const newcar = await userRepository.customSave(data) 
    res.send(newcar)
  });

  // router.post('/typeorm/customrep/:id', async function(req: Request, res: Response) {

  //   const data = req.body;    
  //   const userRepository = (await connection).getCustomRepository(CarRepo);
  //   const newcar = await userRepository.updateAndReturn(data) 
  //   res.send(newcar)
  // });

  router.patch('/customrep/:id', async function(req: Request, res: Response) {

    const id = parseInt(req.params.id);
    const data = req.body;    
    const userRepository = getCustomRepository(CarRepo);
    const updatecar = await userRepository.updateAndReturn(id,data) 

    // const data = req.body;

    // const car = new Car()
    // car.carName=data.carName
    // car.modelYear=data.modelYear
    // car.price=data.price


    // const userRepository = connection.getRepository(Car)
    // const updatecar = await userRepository.update(id,car)
    res.send(updatecar)
    
  });
  
  router.get('/', async(req: Request, res: Response) => {
    const userRepository = getRepository(Car)
    const allcar = await userRepository.find()
    res.send(allcar)
  });

  router.get('/:id', async(req: Request, res: Response) => {
    
    const id = req.params.id;

    const userRepository = getRepository(Car)
    const carById = await userRepository.findOne(id)
    res.send(carById)

  });

  router.patch('/:id', async(req: Request, res: Response)=> {
    const id = req.params.id;
    const data = req.body;

    const car = new Car()
    car.carName=data.carName
    car.modelYear=data.modelYear
    car.price=data.price


    const userRepository = getRepository(Car)
    const updatecar = await userRepository.update(id,car)
    res.send(updatecar)

  });

  router.delete('/:id', async(req: Request, res: Response)=> {
    const id = req.params.id;

    const userRepository = getRepository(Car)
    const deletecar = await userRepository.delete(id)
    res.send(deletecar)
  });

export default router;