import { request, gql , GraphQLClient} from "graphql-request"

export const getPostsQuery = gql`
    query PostsQuery {
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
                expert
            }
            }
        }
        }


`

export cont postDetails = gql`
    query GetPostDetails {
        post(where: {id: "clwpm09pe1tbk07sstcwfzfze", slug: "react-testing"}) {
        expert
        featuredImage {
        url
        createdAt
        }
        slug
        content {
        markdown
        }
    }
    }

`;