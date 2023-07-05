export interface CarCreateDTO {
    carName: string;
    modelYear: string;
    price: number;
   
  }

export interface CarUpdateDTO{
  id: number;
  carName: string;
  modelYear: string;
  price: number;
}