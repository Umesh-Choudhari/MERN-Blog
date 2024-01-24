import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import DashBoard from './Pages/DashBoard'
import Projects from './Pages/Projects'
import Header from './Componenets/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
