
import './App.css'
import About from './Component/About';
import Banner from './Component/Banner';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Menubar from './Component/Menubar';
import Projects from './Component/Projects';
import Topbar from './Component/Topbar';

function App() {

  return (
    <div className='w-full'>
      <Topbar></Topbar>
      <Menubar></Menubar>
      <Banner></Banner>
      <div className='mt-20 mb-20'>
        <About></About>
      </div>
      <Projects></Projects>
      <div>
        <Blog></Blog>
      </div>
      <div className='mt-12'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
