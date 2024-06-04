"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = ()  => {
 const { slug } = useParams()
 console.log('slug are')
 console.log(slug)
  return (
    <div>
      post details  
    </div>
  )
}

export default page
