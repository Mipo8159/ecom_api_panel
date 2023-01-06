import React from 'react'
import './styles/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './router'
import Navbar from './components/ui/Navbar'
import {ToastContainer} from 'react-toastify'
import MessengerCustomerChat from 'react-messenger-customer-chat'

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

      {/* @ts-ignore */}
      <MessengerCustomerChat pageId="100066578245102" appId="502538522017862" />
    </div>
  )
}

export default App
