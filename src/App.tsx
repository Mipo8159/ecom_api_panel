import React from 'react'
import './styles/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import AppRouter from './router'
import Navbar from './components/ui/Navbar'

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
