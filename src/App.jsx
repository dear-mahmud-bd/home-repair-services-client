import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Layouts/Shared/Navbar'
import Footer from './Layouts/Shared/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full z-10 shadow-md">
          <Navbar></Navbar>
        </header>

        <main className="flex-grow mt-20">
          <div className="container max-w-7xl mx-auto p-2">
            <Outlet></Outlet>
          </div>
        </main>

        <footer className="mt-auto bg-custom-green-light w-full">
          <Footer></Footer>
        </footer>
      </div>
    </>
  )
}

export default App
