const { ApolloServer, gql} = require('apollo-server');
const typeDefs = require ('./CRMGraphQL/db/schema');
const resolvers = require ('./CRMGraphQL/db/resolvers');

const conectarDB = require ('./CRMGraphQL/config/db');

// conectar a la base de datos
conectarDB();

//Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});


// inicia el servidor
server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
});

