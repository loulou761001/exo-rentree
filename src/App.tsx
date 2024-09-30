import './App.css'
import Features from './components/Features'
import NavBar from './components/Navbar'
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";

function App() {

  return (
    <>
      <div className="px-[80px]">
        <NavBar/>
        <HeroBanner/>
        <Features/>
      </div>
    </>
  )
}

export default App
