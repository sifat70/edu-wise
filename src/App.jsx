
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Instructor from './components/Instractor/Instructor'
import Navbar from './components/Navbar/Navbar'
import PopularCourse from './components/PopularCourse/PopularCourse'

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <Instructor></Instructor>
      <Blogs></Blogs>
    </>
  )
}

export default App
