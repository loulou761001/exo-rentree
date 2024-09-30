import './App.css'
import Features from './components/Features'
import NavBar from './components/Navbar'
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";

function App() {

  return (
    <>
      <NavBar />
      <HeroBanner/>
      <Features />
    </>
  )
}

export default App
