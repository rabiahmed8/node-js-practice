import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import path from 'path';

export const login = async (req: Request, res: Response) => {
    const user = {
        username: "test@abc.com",
        password: "test"
    }

    jwt.sign({ user }, "secretKey", { expiresIn: '300s' }, (err, token) => {
        res.send({
            token
        })
    })
    // res.send({ msg: "I AM LOGIN"})
}

export const profile = async (req: Request, res: Response) => {
    console.log("asdasd")
    jwt.verify(`${req.headers.token}`, 'secretKey', async (err, authData) => {
        if (err) {
            res.send({ message: 'invalid token' })
        }
        else {
            res.sendFile(path.join(__dirname, '../public/loginSuccesfull.html'))
        }
    })
}

export const verifytoken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization']
    if (bearerHeader) {
        const bearer = bearerHeader.split(" ")
        const token = bearer[1];
        req.headers.token = token
        res.send({ message: 'valid' })
    } else {
        res.send({ message: 'invalid token' })
    }
}