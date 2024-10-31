const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://courtneygraham918:pSZ8paY7nNu2FsIC@graphql.pwroh.mongodb.net/?retryWrites=true&w=majority&appName=graphQL',);

mongoose.connection.once('open', () =>
  console.log('connected to database')
);


app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});