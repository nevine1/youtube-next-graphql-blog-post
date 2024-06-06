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
//this query to get the last 3 posts created 
export const recentPosts = gql`
    query RecentPosts {
            posts(orderBy: createdAt_ASC, last: 3) {
                id
                title
                slug
                expert
                featuredImage {
                url
                }
                createdAt
            }
            }

    `;

export const getPostDetails = gql`
    query PostDetails($slug: String) {
        post(where: {slug: $slug}) {
            expert
            title
            slug
            featuredImage {
            url
            }
            featuredPost
            content {
            markdown
            }
            createdAt
            categories {
                id
                slug
                }
            }
        }
`;

export const getCategories = gql`

    query Categories {
        categories {
            id
            name
            slug
        }
    }

`;

export const getRelatedPostCategoryId = gql`
    query RelatedPosts($slug: String!) {
        posts(where: {categories_some: {slug: $slug}}) {
            id
            slug
            title
            createdAt
            expert
            content {
            markdown
            }
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
`;