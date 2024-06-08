import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  console.log('author vvvvvvvvvvvvvvvv')
  console.log(author)
  console.log('author vvvvvvvvvvvvvvvvvvvvv')
  return (
    <div className="text-center rounded-lg mt-20 mx-4 mb-8 p-12 relative bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14 flex text-center justify-center">
        <img src={author.photo.url}
          
          height={100} width={100}
          className="align-center rounded-full "
          alt={author.name} />
      </div>
      <h3 className="text-center my-4
            text-xl font-semibold text-white">
              {author.name}
      </h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author