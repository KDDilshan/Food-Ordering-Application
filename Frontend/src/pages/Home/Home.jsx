import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  cont[category,setCatrgory]=useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCatrgory={setCatrgory}/>
    </div>
  )
}

export default Home
