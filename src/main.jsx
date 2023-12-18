import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route.jsx'
import DataContex from './Contex/DataContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(  
    <RouterProvider router={router} />
  
)
