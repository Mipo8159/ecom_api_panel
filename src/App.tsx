import React from 'react'
import './styles/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './router'
import Navbar from './components/ui/Navbar'
import {ToastContainer} from 'react-toastify'

const App: React.FC = () => {
  return (
    <div className="container">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />

      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
