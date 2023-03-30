import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import '../Home/Home.css';

const Home = () => {
  return (
    <>
      
    <NavBar/>
    <section className='section-One'>
    
      <div className='div-for-all'>

      <div className="h1-div">
        <h1 className='h1-div h1' to={'/'}>It's Your Own Making ...</h1> 
      </div>

      <div className='p-div'>
        <p>We let you reflect your personality with an Perfume<br></br>it is very special because it is your personal creation</p>
      </div>

      
        <button class='glowing-btn'><span class='glowing-txt'>S<span class='faulty-letter'>A</span>RT</span></button>
      

      </div>

    </section>

<Footer />

    {/* <section>
      <h1>2222222222222222222222222222222222</h1>
    </section>
    <section>
      <h1>3333333333333333333333333333333333333333</h1>
    </section> */}
   
    
    </>
  )
}

export default Home