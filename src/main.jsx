import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Products from './pages/Products.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/ErrorPage.jsx'
import HomePage from './pages/Home Page.jsx'
import Contact from './pages/contact.jsx'
import SingleProduct from './pages/SingleProduct.jsx'


const router = createBrowserRouter([
  {
    element:<App/>,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"Products",
        element: <Products/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path :"products/:id",
        element:<SingleProduct/>
      },
      {
        path:"*",
        element:<NotFound/>
        
      }
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
