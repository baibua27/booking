import {createBrowserRouter, RouterProvider, Outlet, Router} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Review from '../layout/Review'
import Reserve from '../layout/reserve'
import Payment from '../layout/Payment'
import Record from '../layout/Record'
import Contact from '../layout/Contact'


const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      { path: '/review', element: <Review />},
      { path: '/reserve', element: <Reserve/>},
      { path: '/payment', element: <Payment/>},
      { path: '/record', element: <Record/> },
      { path: '/contact', element: <Contact/> },
      
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <UserHome /> },
      { path: '/review', element: <Review />},
      { path: '/reserve', element: <Reserve/>},
      { path: '/payment', element: <Payment/>},
      { path: '/record', element: <Record/> },
      { path: '/contact', element: <Contact/> },
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  const finalRouter = user?.id ? userRouter : guestRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}