import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000)



// 也可以像下面这样
// var express = require('express');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');
// //定义schema  
// var schema = buildSchema(`  
//     type User{  
//         name: String  
//         sex: String  
//         intro: String  
//     }  
//     type Arraycontent{
// 		code:Boolean
// 		number:Int
//     }
//     type ProfilePicture {
//       width: Int
//       size: Int
//     }
//     type Query {  
//         user:User  
// 	    hello: String
// 	    arraytest(code:Boolean):[Arraycontent]!
// 	    profilePicture(size: Int = 50): ProfilePicture
//     }  
// `);   
// //定义服务端数据  
// var root= {  
//     user: {  
//         name: 'username',  
//         sex: '男',  
//         intro: '资深码农'  
//     },
//     hello:'test' ,
//     arraytest:[
//     	{
//     		code:true,
//     		number:1
//     	},
//     	{
//     		code:false,
//     		number:2
//     	}
//     ],
//     profilePicture:{
//     	width:50,
//     	size:50
//     }
// };  

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));

// {__schema { queryType { name, fields { name, description} }}} 
// {  
//     user {  
//         name 
//         sex 
//     }
//     hello 
//     arraytest {
//     	code
//     	number
//     }
//     littlePic: profilePicture(size: 50) {
//       width
//     },
// }  
