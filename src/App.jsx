import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Info from './components/Info.jsx'


function App() {
  return (
    <>
      <div className='container ml-auto mr-auto mt-6 mx-auto w-96 dark:bg-slate-800 dark:text-gray-400 rounded-lg overflow-hidden shadow-lg shadow-slate-300 dark:shadow-zinc-900'>
        <Info />
        <div className='p-4'>
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
