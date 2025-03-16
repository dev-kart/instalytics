"use client"
import AddPost from '@/components/dashboard/AddPost'
import GetPosts from '@/components/dashboard/GetPosts'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-white'>
        <AddPost />
        <GetPosts />
    </div>
  )
}

export default Page