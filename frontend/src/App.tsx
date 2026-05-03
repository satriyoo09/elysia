import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/daftar" element={<Register />} />
        <Route path="/auth/masuk" element={<Login />} />
        
        {/* User Routes */}
        <Route path="/home" element={<div>Home Page (User Dashboard)</div>} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/auth/masuk" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App