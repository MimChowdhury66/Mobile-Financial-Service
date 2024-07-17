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
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query';
import Registration from './pages/Registration/Registration.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './layout/Dashboard.jsx';

import Root from './layout/Root.jsx';
import { AuthProvider } from './AuthProvider/AuthProvider.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute.jsx';
import Overview from './pages/DashBoard/Overview.jsx';
import Transaction from './pages/Transaction/Transaction.jsx';
import CashIn from './pages/DashBoard/CashIn.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      // {
      //   path: "/profile",
      //   element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>
      // }
    ]
  },


  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    children: [
      {
        path: "profile",
        element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>
      },
      {
        path: "transactions",
        element: <ProtectedRoute><Transaction></Transaction></ProtectedRoute>
      },
      {
        path: "cashIn",
        element:<CashIn></CashIn>
      }
    ]
  }
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <RouterProvider router={router} /> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </AuthProvider>


    <ToastContainer />
  </React.StrictMode>,
)
