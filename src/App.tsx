import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HeroBanner} from "./components/HeroBanner/HeroBanner.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroBanner/>
    </>
  )
}

export default App
