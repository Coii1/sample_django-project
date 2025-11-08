import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Scholarships from './pages/Scholarships'
import { useState } from 'react'
import './styles/App.css'

import Posts from './pages/postManagement.jsx'
import PostDetails from './pages/postDetails.jsx'

function App() {
//   const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Scholarships/> } />
            <Route path="/posts" element={ <Posts/> } />
            <Route path="/postDetails" element={ <PostDetails/> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
