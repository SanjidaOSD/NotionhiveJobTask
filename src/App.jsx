
import './App.css'
import About from './Component/About';
import Banner from './Component/Banner';
import Menubar from './Component/Menubar';
import Projects from './Component/Projects';

function App() {

  return (
    <div className='w-full'>
      <Menubar></Menubar>
      <Banner></Banner>
      <div className='mt-20'>
        <About></About>
      </div>
      <Projects></Projects>
    </div>
  )
}

export default App
