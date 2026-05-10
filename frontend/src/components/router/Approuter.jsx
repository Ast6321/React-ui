import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import MainLayout from '../layout/Mainlayout'



function Approuter(){

    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default Approuter