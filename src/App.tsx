import './App.css'
import Features from './components/Features'
import NavBar from './components/Navbar'
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";
import Commentary from './components/Commentary/index.tsx';

function App() {

  return (
    <>
      <NavBar />
      <HeroBanner/>
      <Features />
      <Commentary />
    </>
  )
}

export default App
