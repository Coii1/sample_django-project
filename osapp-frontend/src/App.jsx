import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Scholarships from './pages/Scholarships'
import { useState } from 'react'
import './styles/App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
        <Routes>
            <Route path="/" element={ <Scholarships/> } />
        </Routes>
  )
}

export default App
