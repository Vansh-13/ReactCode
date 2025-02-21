import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet ..lauout ko base use ker lega and uppper and neeche ka same
function Layout() {
  return (
<>
<Header/>
<Outlet/> 
{/* in this upper and lower is same but chnge only Outlet part */}
<Footer/>
</>
  )
}

export default Layout
