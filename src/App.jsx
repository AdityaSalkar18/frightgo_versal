import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'


import Home from "./components/Home/Home"
import About from "./components/About/About"
import Service from "./components/Service/Service"
import Contact from "./components/Contact/Contact"
import BookService from "./components/BookService/BookService"
import Join from "./components/Join/Join"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />

     <Route path="/book" element={<BookService/>} />
     <Route path="/join" element={<Join/>} />


    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
