import React from 'react'
import Carousel from './components/corousel'
import Kategory from './components/kategory'
import Recomended from './components/recomdasipage'

export default function Home() {
  return (
    <div className='w-full min-h-full'>
      <Carousel/>
      <Kategory/>
      <Recomended/>
    </div>
  )
}
