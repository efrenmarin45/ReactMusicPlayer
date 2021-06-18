import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://react-music-project.hasura.app/v1/graphql"
})

export default client;