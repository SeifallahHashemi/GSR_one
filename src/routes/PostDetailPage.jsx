import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function PostDetailPage() {
  const {id} = useParams();
  const posts = useLoaderData();
  return (
    <div className='py-4'>
      <h2 className='text-center text-lg text-red-900'>{posts[id].name}</h2>
      <p className='text-right mt-4'>{posts[id].text}</p>
    </div>
  )
}

export default PostDetailPage

export async function loader({ params }) {
  console.log(params.id);
  const response = await fetch(`https://react-todo-54e07-default-rtdb.firebaseio.com/posts.json`)
  const data = await response.json();
  return data;
}