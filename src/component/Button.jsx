import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import hero from './images/hero.jpg';
import Model from './Model';
import { useState } from 'react';
import Signup from './Signup'

import Login from './Login'
import Login1 from './Login1';


const Button = (() => {
  const [open, setOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [login1,setLogin1]=useState(false)


  return (
    <>

      <div className="home">


        <div className='hader'>
          <div className="logo">
            <Link to="/img">  <button> <img src={logo} alt="" /></button></Link>

          </div>
          <div className="button">
            <button>BUY STREAMO</button>
            <Link to="/movies">  <button>Movies</button></Link>
            <button onClick={() => setOpen(!open)}>SIGN IN</button>
            <button onClick={() => setLogin(!login)}>LOGIN</button>
            <button onClick={()=> setLogin1(!login1)}>Login1</button>

          </div>
        </div>

        <div className='img'>
          <img src={hero} alt="" />
          <div className='heding'>
            <h1>Streamo</h1>
            <h2>Netflix Like VueJs Website Template</h2>
            <h3>A clean Video & Media streaming website template. It provides a creative and<br />
              professional design.</h3>
            <Link to="/VIEWDEMO"><button>VIEWDEMO</button></Link>
          </div>

        </div>
      </div>



      {/*signup model  */}
      {
        open && <Model>
          <Signup />


        </Model>
      }

      {/* login model */}

      {
        login && <Model>
          <Login />
        </Model>

      }
{
  login1 && <Model><Login1/></Model>
}

    </>
  )
})
export default Button