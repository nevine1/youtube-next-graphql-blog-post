import { GraphQL, gql  } from "graphql-react";

export const PostsQuery = gql`
    query MyQuery {
        postsConnection {
            edges {
            node {
                author {
                id
                name
                bio
                photo {
                    url
                }
                }
                createdAt
                id
                slug
                title
                featuredImage {
                url
                }
                categories {
                id
                name
                slug
                }
            }
            }
        }
        }


`