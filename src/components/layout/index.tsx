import { Outlet } from 'react-router-dom';
import Navbar from './navbar'
import Footer from './footer'

const Layout = () =>{
  return(
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>

  )
}

export default Layout