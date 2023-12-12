"use client";

import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const BASE_MAGENTO_GRAPHQL_ENDPOIN =
    "https://ce246-aliakseitupalski-php81.neklodev.com/graphql";

function makeClient() {
    const httpLink = new HttpLink({
        uri: BASE_MAGENTO_GRAPHQL_ENDPOIN,
        fetchOptions: { cache: "no-store" },
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
