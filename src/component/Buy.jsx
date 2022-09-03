import {Link} from 'react-router-dom'
import img2 from './images/img2.jpg';
import logo from './images/logo.png'
import img3 from './images/img3.png'
const Buy=(()=>{
    return(
       <>
       <div className='part'>
        <h1>Endless movies, TV <br/>shows, and more.</h1>
        <h4>Enjoy anywhere. Unsubscribe anytime.</h4>
        <h5>Ready to watch? Enter your email to create or 
            restart your membership.</h5>
           <div className='input'>
            <input type="email" placeholder='Email Address'/>
            <button>Get Started</button>
            </div> 
       </div>
       <div className='buy'>
        <div className='logo2'>
            <img src={logo} alt=""/>
        </div>
        <div className='buybtn'>
        <Link to="/SIGN IN">  <button>SIGN IN</button></Link>
        </div>
       </div>
       <div className="overlay"></div>
       <img src={img2} alt="" className='img2'/>

       <div className='sec'>
        <div className='sec1'>
            <h1>Enjoy Watching Them on TV.</h1>
            <h4>Whether it s Smart TV, Xbox, Apply TV, Watch<br/>
             Your Favorite Program with Great Pleasure.</h4>
        </div>
      <div className='sec2'> <img src={img3} alt=""/></div>
       </div>
       </>
    )
})
export default Buy