import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Plant from './pages/Plant.jsx'
import Submit from './pages/Submit.jsx'

const router=createBrowserRouter(               
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>   
      <Route path='plant' element={<Plant/>}/>
      <Route path='submit' element={<Submit/>}/>
    </Route>)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
