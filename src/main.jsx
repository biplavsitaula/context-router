import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './components/PostList'
import { PostsProvider } from './context/PostContext'
import Post from './components/Post'

const router=createBrowserRouter([
  {
    path: '/',
    element: <PostList/>
  },
  {
  path: '/:postId',
  element: <Post/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostsProvider>
    <RouterProvider router={router}/>
  </PostsProvider>
)
