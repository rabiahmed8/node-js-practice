import express, { Request, Response } from 'express';

export const getAllProducts = async (req: Request,res: Response)=>{
    res.send({ msg: "I AM PRODUCTS"})
}

export const getAllProductsTesting = async (req: Request,res: Response)=>{
    res.status(200).json({ msg: "I AM PRODUCTS test"})
}


