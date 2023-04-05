import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 sticky top-0 h-16 flex justify-between items-center px-5'>
      <ul className='flex gap-5 p-5'>
        <NavLink to=''>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
