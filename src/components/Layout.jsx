import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation()

  return (
    <>
      <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>Client CRM</h2>
          <nav className='mt-10'>
            <Link to='/' className={`${location.pathname === '/' ? 'text-blue-500' : 'text-white'} text-2xl block mt-2 hover:text-blue-400`}>Home</Link>
            <Link to='/about-us' className={`${location.pathname === '/about-us' ? 'text-blue-500' : 'text-white'} text-2xl block mt-2 hover:text-blue-400`}>About Us</Link>
          </nav>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen'>
          <Outlet />
        </main>
      </div>     
    </>
    
  )
}

export default Layout