"use client"
import Image from "next/image";
import { useState, useEffect } from 'react'

const posts = [
  { name: 'Web developnet', excerpt: 'web develpemnet for beginners'},
  { name: 'Web designer', excerpt: 'full course for web designer'},

]
export default function Home() {
 

  return (
    <div className="container px-10 mx-auto mb-8">
      <div className=" bg-gray-300 grid grid-cols-1 lg:grid-cols-12 gap-12"> 
        <div className=" m-3 lg:col-span-8 col-span-1">
          
       {
        posts.map((post, index) =>(
          <div key={post.index}>
            <h2>{post.name}</h2>
            <h3>{post.excerpt}</h3>
          </div>
        ))
       }
       </div> 
      </div>
      <div className="lg:col-span-4 col-span-1">
       <div className="lg:sticky relative top-8">

       </div>
      </div>
    </div>
  );
}
