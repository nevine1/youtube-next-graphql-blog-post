
import { GetPostsQuery } from '../utils/queries';
import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT
export const getAllPosts = async () =>{
    const getPostsQuery = gql`
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
                }
                }
            }
        }
    `
    const results = await request(graphqlAPI, GetPostsQuery);
    return results.postsConnection.edge; 
}

export const submitComment = async (obj) =>{
    const result = await fetch('', { 
        method: 'POST',
        body: JSON.stringify(obj);
    });

    return result.json();
}