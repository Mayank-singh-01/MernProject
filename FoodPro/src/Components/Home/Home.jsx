import React from 'react'
import Navbar from '../Header/Header'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="flex justify-center my-10 gap-x-12 gap-y-5 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
                                 