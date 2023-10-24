import React from 'react'
import CatagreeCard from '../../Components/Card/CatagreeCard'
import HomeBanner from './HomeBanner'
import HomeProducts from './HomeProducts'


const Home = () => {
  return (
    <div>
      <CatagreeCard />
      <HomeBanner />
      <HomeProducts />
    </div>
  )
}

export default Home