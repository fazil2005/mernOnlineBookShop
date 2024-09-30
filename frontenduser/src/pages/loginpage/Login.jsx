import React, { useState } from 'react'
import './Login.css'
import axios from '../../helper/axiosInterceptor'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

    const [currentstate,setCurrentState]=useState("Login")
    const navigate=useNavigate()
    const toggleState=()=>{
        setCurrentState(currentstate==="Login"?"Signup":"Login")
    }

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler=(e)=>{
        const {name,value}=e.target;
        setData((data)=>({...data,[name]:value}))
    }



    const onLogin=async(e)=>{
        e.preventDefault();
        if(currentstate==="Login"){
           const responce= await axios.post('/api/user/login',data)
           if(responce.data.success){
            localStorage.setItem("id",responce.data.id)
            localStorage.setItem("name",responce.data.name)
            localStorage.setItem("token",responce.data.token)
            navigate('/')
            
           }else{
            toast.error(responce.data.message)
           }
        }else{
           const responce= await axios.post('/api/user/registration',data)
           if(responce.data.success){
            setCurrentState("Login")
            toast.success(responce.data.message)
            resetInputs()
            
           }else{
            toast.error(responce.data.message)
           }
        }


    }

    const resetInputs=()=>{
        setData({
            name:"",
            email:"",
            password:""
        })
    }



  return (
    <div className='login'>
        <form className="loginfields" onSubmit={onLogin}>
            <h1>{currentstate==="Login"?"Login":"Signup"}</h1>

            {currentstate==="Signup"&&(
            <input type="text" placeholder='Your name' name='name' value={data.name} onChange={onChangeHandler} required />
            )}
           
            <input type="email" placeholder='Email' name='email' value={data.email} onChange={onChangeHandler} required />
            <input type="password" placeholder='Password' name='password' value={data.password} onChange={onChangeHandler} required/>
            <button type='submit'>Continue</button>
            <p onClick={toggleState}>{currentstate==="Login"?"Don't have an account?":"Already have an account?"}</p>
            <div className="checkboxdiv">
                <input type='checkbox' required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </form>
      
    </div>
  )
}

export default Login
