import './App.css'
import Navbar from './components/navbar.jsx'
import FirstIntro from './components/firstIntro.jsx'

function App() {

  return (
    <>
      <div className='bg-gray-900 min-h-screen'>
        <Navbar />
        <FirstIntro />
      </div>
     
    </>
  )
}

export default App