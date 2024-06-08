import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  console.log('author vvvvvvvvvvvvvvvv')
  console.log(author)
  console.log('author vvvvvvvvvvvvvvvvvvvvv')
  return (
    <div className="text-center rounded-lg mt-20 mb-8 p-12 relative bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <img src={author.photo.url}
          height="100px" width="100pxx"
          className="align-center rounded-full "
          alt="author image" />
          <h3 className="text-center my-4
            text-xl font-semibold">
              {author.bio}
          </h3>
      </div>
      
    </div>
  )
}

export default Author