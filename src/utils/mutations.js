import { request, gql , GraphQLClient} from "graphql-request"


 export const createCommentQuery = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: {
              name: $name,
              email: $email,
              comment: $comment,
              post: {
                connect: { slug: $slug }
              }
            }) {
              id
            }
          }
        `;
        

export const createCategoryQuery = gql`
  mutation CreateCategory ( $name: String!, $slug: String!) {
    createCategory(data: { name: $name, slug: $slug}) {
      id
      name
      slug
      price
    }
  }

`;