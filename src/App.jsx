import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logOut } from './store/authSlice'
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const dispacth = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispacth(login({ userData }))
        } else {
          dispacth(logOut())
        }
      })
      .finally(() => setIsLoading(false)
      )
  }, [])


  return !isLoading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
