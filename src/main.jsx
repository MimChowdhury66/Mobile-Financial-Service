import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration/Registration.jsx';
import Login from './pages/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
  },
  {
    path: "/login",
    element:<Login></Login>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
