import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function PostDetailPage() {
  const {id} = useParams();
  const posts = useLoaderData();
  return (
    <div className='py-4 mt-20 border border-gray-800 px-2 rounded-xl'>
      <h2 className='text-center text-lg text-red-900'>{posts[id].name}</h2>
      <p className='text-center mt-4'>{posts[id].text}</p>
    </div>
  )
}

export default PostDetailPage

export async function loader({ params }) {
  const response = await fetch(`https://react-todo-app-920a7-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`)
  const data = await response.json();
  return data;
}