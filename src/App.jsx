
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Instructor from './components/Instractor/Instructor'
import Navbar from './components/Navbar/Navbar'
import PopularCourse from './components/PopularCourse/PopularCourse'
import Reviews from './components/Reviews/Reviews'

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <Instructor></Instructor>
      <Blogs></Blogs>
      <Reviews></Reviews>
    </>
  )
}

export default App
