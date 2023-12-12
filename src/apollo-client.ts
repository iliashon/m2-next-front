import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://ce246-aliakseitupalski-php81.neklodev.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
