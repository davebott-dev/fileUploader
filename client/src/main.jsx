import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './login.jsx'
import Root from './Routes/root.jsx'
import Index from './Routes/index.jsx'
import Signup from './Routes/signup.jsx'
import Account from './Routes/account.jsx'
import Recent from './Routes/recent.jsx'
import Favorites from './Routes/favorites.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>,
  },
  {
    path:'/signup',
    element: <Signup/>,
  },
  {
    path: '/homepage',
    element: <Root/>,
    children: [
      {
        index:true,
        element:<Index/>,
      },
      {
        path: '/homepage/account',
        element: <Account/>,
      },
      {
        path: '/homepage/recent',
        element :<Recent/>,
      },
      {
        path: '/homepage/favorites',
        element:<Favorites/>,
      },  
   

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
