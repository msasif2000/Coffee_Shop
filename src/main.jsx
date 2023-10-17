import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import ErrorPage from './components/ErrorPage';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import AuthProvider from './components/Provider/AuthProvider';
import Users from './components/Users';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/signIn',
    element: <Signin></Signin>
  },
  {
    path: '/user',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/user')
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
