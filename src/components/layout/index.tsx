import { Outlet } from 'react-router-dom';
import Navbar from './navbar'
import Footer from './footer'

const Layout = () =>{
  return(
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-3">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout