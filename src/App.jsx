import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<div>Home (coming soon)</div>} />
      </Routes>
    </BrowserRouter>
  )
}
