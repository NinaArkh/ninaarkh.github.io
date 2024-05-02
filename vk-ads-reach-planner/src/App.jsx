import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {

  return (
    <>
    < Navbar />
    <main> 
      < Sidebar />
      < Content />
    </main>
    </>
  )
}

export default App
