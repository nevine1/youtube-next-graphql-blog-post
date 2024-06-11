import React from 'react'
import { GraphQLClient, gql } from 'graphql'
import { headers } from 'next/headers';
import { createCommentQuery } from '../../utils/mutaions'
const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
const page = (req, res) => {

    const { name, email, comment, slug } = req.body;
    const graphQLClient = new GraphQLClient(graphAPI, {
        method: 'POST', 
        headers: { 
            Authorization: `Bearer ${process.env.GRAPHCMS_TOCKEN}` 
        }
    })
     
    const result = await GraphQLClient.request(createCommentQuery, req.body);
    return req.status(200).send(result)
  return (
    <div>page</div>
  )
}

export default page