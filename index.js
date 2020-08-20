const { ApolloServer, gql} = require('apollo-server');




//Servidor
const server = new ApolloServer();


// inicia el servidor
server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
});

