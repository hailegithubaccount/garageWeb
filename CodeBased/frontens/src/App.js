
import React from 'react'


import Home from "./markup/pages/Home"
import Login from "./markup/pages/Login"
import AddEmploye from "./markup/pages/admin/AddEmploye"
import { Route,Routes } from 'react-router';

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color.css";

import Header from "./markup/components/Header/Header"
import Footer from "./markup/components/Footer/Footer"

 function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/add-employe' element={<AddEmploye/>}/>
      </Routes>
      <Footer/>

        
    </div>
  )
}
export default App;


