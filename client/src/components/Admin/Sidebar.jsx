import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaBox, FaTags } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className='w-full bg-gray-900 text-white font-medium text-xl p-6 min-h-screen'>
      <ul className='list-none flex flex-col gap-6'>
        <Link to="/admin" className={`flex items-center p-2 rounded-lg transition-colors ${location.pathname === '/admin' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <FaTachometerAlt className='mr-3 max-md:mr-1' />
          <li className=' max-md:hidden'>Dashboard</li>
        </Link>
        <Link to="/admin/orders" className={`flex items-center p-2 rounded-lg transition-colors ${location.pathname === '/admin/orders' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <FaShoppingCart className='mr-3 max-md:mr-1' />
          <li className=' max-md:hidden'>Orders</li>
        </Link>
        <Link to="/admin/users" className={`flex items-center p-2 rounded-lg transition-colors ${location.pathname === '/admin/users' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <FaUsers className='mr-3 max-md:mr-1' />
          <li className=' max-md:hidden'>Users</li>
        </Link>
        <Link to="/admin/products" className={`flex items-center p-2 rounded-lg transition-colors ${location.pathname === '/admin/products' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <FaBox className='mr-3 max-md:mr-1' />
          <li className=' max-md:hidden'>Products</li>
        </Link>
        <Link to="/admin/categories" className={`flex items-center p-2 rounded-lg transition-colors ${location.pathname === '/admin/categories' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
          <FaTags className='mr-3 min-md:mr-1' />
          <li className=' max-md:hidden'>Categories</li>
        </Link>
      </ul>
    </div>
  );

}

export default Sidebar
