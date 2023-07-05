// import "reflect-metadata"
// // import { DataSource } from "typeorm"
// import { Cars } from "./entity/Car"
// import { createConnection, Connection } from "typeorm"; 

// // export const connection = createConnection({ type: 'mysql', 
// //      url: 'http://localhost/phpmyadmin/index.php?route=/database/structure&db=typeorm' 
// // })

// export const connection = createConnection({
//      type: "mysql",
//      host: "localhost",
//      port: 3306,
//      username: "root",
//      password: "",
//      database: "typeorm",
//      entities: [
//         __dirname + "src/entity/Car.ts"
//      ],
//      synchronize: true,
//      logging: false
//    }).then(async connection => {
//      console.log("Database Connected")
//    }).catch(error => console.log(error));

// // export const AppDataSource = new DataSource({
// //     type: "mysql",
// //     host: "localhost",
// //     port: 3306,
// //     username: "root",cclc
// //     password: "",
// //     database: "typeorm",
// //     synchronize: true,
// //     logging: false,
// //     entities: [Cars],
// //     migrations: [],
// //     subscribers: [],
// // })
