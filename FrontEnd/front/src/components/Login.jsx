import React, { useState } from 'react'
import Nav from './Nav'
import { VscErrorSmall } from "react-icons/vsc";
import {useForm} from 'react-hook-form'
import * as yup  from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {ThreeDot} from 'react-loading-indicators';
import Swal from 'sweetalert2'


const Login = () => {
    const [load,setLoad] = useState(false)
 const navigate = useNavigate()
  const [success,setSuccess] = useState(false)
    const schema = yup.object().shape({
        mail:yup.string().email('please Enter the vaild Email').required('Email is required'),
        password:yup.string().required('Password is required').min(4,'password must be 4 to 6 charecters').max(6,'password mu be 4 to 6 charecters'),
        
      })
       const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})
          const loginSub = async(e)=>{
           
              try {
                setLoad(true)
                const loginMail = e.mail
                const loginPass = e.password
                const responce = await axios.post(`${import.meta.env.VITE_LOGIN}`,{loginMail,loginPass})
          
                setSuccess(responce.data)
                if(responce.data){
                 navigate('/main')
                }
                else{
                  Swal.fire({
  position: "top-end",
  icon: "error",
  title: "mismatch mail  and password",
  showConfirmButton: false,
  timer: 1500
});
                }
                
              } catch (error) {
                console.log(error.message);
                
              }
              finally{
                setLoad(false)
              }
          }

  return (
     <div className="w-full relative min-h-screen pb-4">
       <Nav />
 
       <div className="w-full h-full bg-black absolute -z-1 top-0 left-0">
         <img
           src="./signIn.jpg"
           className=" w-full h-full opacity-70 "
           alt=""
         />
       </div>
 
      <form style={{minHeight:'calc(100vh - 110px)'}} className="flex items-center" onSubmit={handleSubmit(loginSub)}>
        <div className="bg-black/85 mt-7 relative text-white p-10 w-[90%]  sm:w-[70%] md:w-[65%]  lg:w-[50%] mx-auto flex flex-col gap-6 ">
         <h2 className="text-4xl font-medium ">Log In</h2>
         <div>
          <div className="mb-3 flex flex-col gap-1">
            <input {...register('mail')} className={`p-2 text-xl bg-[#333333] rounded w-full border-0  outline-0 ${errors?.mail?'border-b-2 border-red-500':''} `} type="text" placeholder="Email or Phone number"/>
           {
             errors?.mail &&  <p className="text-red-400 text-[12px] flex items-center"><VscErrorSmall className="text-red-400 text-xl" /> {errors.mail.message}</p>
           }
          </div>
          <div>
           <input {...register('password')} className={`p-2 text-xl bg-[#333333] rounded w-full border-0  outline-0 ${errors?.password?'border-b-2 border-red-500':''} `} placeholder="password" />
 {
               errors?.password &&  <p className="text-red-400 text-[12px] flex items-center"><VscErrorSmall className="text-red-400 text-xl" /> {errors.password.message}</p>
 
 }
          </div>
         </div>
         <div className="flex flex-col gap-2 justify-center">
           <button type="submit" className="w-full bg-red-600 p-2 rounded font-medium cursor-pointer " >{load? <ThreeDot color="white" size="medium"  />:'Log In'}</button>
           <div className="flex justify-between ">
            <span className="flex items-center gap-1 font-light text-[13px]">
              <input type="checkbox" name="" id="" /> <p>Remember Me</p>
            </span>
             <p className="text-[14px] font-light">Need help?</p>
           </div>
         </div>
         
           <p className="text-white/50 text-[12px] sm:text-[16px]">No Account? <span className="cursor-pointer hover:text-blue-500 text-white" onClick={()=>navigate('/signup')}>Sign Up now</span></p>
      
         <p className="text-white/50 text-[13px]">
           This page is producted by Google reCAPTCHA to ensure you're not a bot{" "}
           <span className="text-blue-500 cursor-pointer whitespace-nowrap " > Learn more</span>
         </p>
       </div>
      </form>
     </div>
  
  )
}

export default Login



