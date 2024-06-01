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

export const recentPosts = gql`
    query RecentPosts {
            posts(orderBy: createdAt_ASC, last: 3) {
                id
                slug
                expert
                featuredImage {
                url
                }
                createdAt
            }
            }

    `;