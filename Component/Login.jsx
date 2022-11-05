import React, { useState } from "react";

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [entry,setEntry]=useState([])
    const submitForm=(e)=>{
        e.preventDefault();

        const  nEntry={email:email, password:password}
        setEntry([...entry, nEntry])
       /* const handle=()=>{
          localStorage.setItem('Email',email)
          localStorage.setItem('Password',password)
        };*/
    }
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" autoComplete="off"
          value={email}
          onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="off"
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
       {/*<div>
        {
          localStorage.getItem('Email')&&(
            <div>
              Email:<p>{localStorage.getItem('Email')}</p>
            </div>
          )
        }

        {
          localStorage.getItem('Password')&&(
            <div>
              Password:<p>{localStorage.getItem('Password')}</p>
            </div>
          )
        }
      </div>
     <div>
          {
            entry.map((curElem)=>{
               return(
                <div className="data">
                    <p>{curElem.email}</p>
                    <p>{curElem.password}</p>
                </div>
               )  
            })
          }
        </div>*/}
    </>
  );
};

export default Login;
