import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import ErrorPage from './error-page.jsx'
import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<ErrorPage/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}>
        <Route path='keyur' element={<Keyur/>} />     {/* now this will give /about/keyur route */}
      </Route>    
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      {/* <Route path='github' element={<Github/>} /> */}
      <Route loader={githubInfo}
       path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
