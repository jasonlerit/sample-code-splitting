import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-gray-600 h-screen p-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
