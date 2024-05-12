import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import myContext from '../../context/myContext'
export default function HomePage() {

  const context = useContext(myContext)
  const name = context
  return (
    <div>
      <Layout>
        <HeroBanner />
        <Category />
        <HomePageProductCard />
        <Track />
      </Layout>
    </div>
  )
}
