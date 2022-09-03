const Login=(()=>{
    return(
        <>
        <div  className="login-form">
        <div>
        <h1>LOGIN FORM</h1>
        <div className="login1">
            <div className="login">
              <label>Email id-</label>  
            <input type="text" placeholder="email id"
            /><br/></div>
           <div className="login"> <label>Password-</label>
            <input  type="password" placeholder="password"/><br/>
            </div>
            </div>
            <div className="btn">
            <button>LOGIN</button>
            </div>


        </div>
        </div>
        
        </>
    )
}) 
export default Login