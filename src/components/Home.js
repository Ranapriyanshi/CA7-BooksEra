import React from 'react'
import'./home.css'
import Books from './Books'
import Form from './Form'
import { Route,Routes,Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='header'>
        <div className='topDiv'>
        <Link style={{textDecorationLine:'none',color:'black'}}to='/'>
        <h1 id="title">Book's ERA</h1>
        </Link>
        </div>
        <Link style={{textDecorationLine:'none',color:'white'}} to='register'>
        <button>Register</button>
        </Link>
      </div>
            
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='register' element={<Form/>}/>

        </Routes>
    </div>
  )
}

export default Home
