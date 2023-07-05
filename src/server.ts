import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createConnection} from 'typeorm';
import http from 'http';
import router from './routes';
import path from 'path';

const app = express();
const port = 3000;
// const jwt= require('jsonwebtoken')
app.use(bodyParser.json());

let connection=createConnection()


app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// app.post('/',(req:Request,res:Response)=>{
//   console.log(req.body)
//   // res.send("post method called")
//   res.sendFile(path.join(__dirname, '../public/loginSuccesfull.html'));
//   // res.sendFile(path.join(__dirname, '../public/loginFailed.html'));

// })



connection.then(async connection => {
  
  console.log("connected")
  // console.log(path.join(__dirname, 'public'))
    
    http.createServer(app).listen(port, () => {
      console.log(`application is listening on port: ${port}`);
    });

  app.use('/api',router)
  
}).catch(error => console.log(error));
