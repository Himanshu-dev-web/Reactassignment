import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Products/>
      <Contact/>
    </>
  )
}

export default App
