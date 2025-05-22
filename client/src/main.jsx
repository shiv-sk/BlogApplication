import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import NewBlog from './pages/NewBlog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import MyBlogs from './pages/MyBlogs.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import EditBlog from './pages/EditBlog.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
  import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"newblog",
        element:<NewBlog/>
      },
      {
        path:"editblog/:blogId",
        element:<EditBlog/>
      },
      {
        path:"blog/detail/:blogId",
        element:<BlogDetail/>
      },
      {
        path:"myblogs/:userId",
        element:<MyBlogs/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </AuthProvider>
  </StrictMode>,
)
