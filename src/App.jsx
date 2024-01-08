
import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import ContactUs from './components/ContactUS/ContactUs'
import Footer from './components/Footer/Footer'
import Instructor from './components/Instractor/Instructor'
import Navbar from './components/Navbar/Navbar'
import PopularCourse from './components/PopularCourse/PopularCourse'
import Reviews from './components/Reviews/Reviews'
import SuitableCourse from './components/SuitableCourse/SuitableCourse'

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularCourse></PopularCourse>
      <About></About>
      <Instructor></Instructor>
      <SuitableCourse></SuitableCourse>
      <Blogs></Blogs>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  )
}

export default App
