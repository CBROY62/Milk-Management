import { useState } from 'react'
import Navbar from './Components/Navbar';
import ImageSlider from './Components/imgslider';
import MenuBellySlider from './Components/MenuBellySlider';
import PremiumProducts  from './Components/PremiumProducts';
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <ImageSlider></ImageSlider>
      <MenuBellySlider></MenuBellySlider>
      <PremiumProducts></PremiumProducts>
      <h1>Under process</h1>
      <Footer></Footer>
    </>
  )
}

export default App
