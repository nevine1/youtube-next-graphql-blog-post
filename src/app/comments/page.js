import React from 'react'
import { GraphQLClient, gql } from 'graphql'
import { headers } from 'next/headers';

const graphAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
const page = () => {
    const graphQLClient = new GraphQLClient(graphAPI, {
        method: 'POST', 
        headers: { 
            Authorization: `Bearer ${process.env.GRAPHCMS_TOCKEN}` 
        }, //
        body: JSON.stringify
    })
  return (
    <div>page</div>
  )
}

export default page