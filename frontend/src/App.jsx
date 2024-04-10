import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AppRoutes from './routes/routes'


function App() {

  return (
    <>
      <Navbar/>
      <AppRoutes/>
    </>
  )
}

export default App
