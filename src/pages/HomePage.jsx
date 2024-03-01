import React from 'react'
import Products from '../components/Products'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className="hero py-16 px-2">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <h6 className="text-lg"><em>Are you hungry?</em></h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
            <Link to="/cart"><button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-full mt-2 text-white font-bold">Order now</button></Link>
          </div>
          <div className="w-1/2">
            <img className="w-4/5 ml-3" src="/img/hero.png" alt="pizza"/>
          </div>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </>
  )
}

export default HomePage
