import Nav from './Nav'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Globe } from "./ui/Globe.jsx"

const Main = () => {
  const navigate = useNavigate()

  useEffect(()=>{
 const fetchApi = async()=>{
   try {
   const responce = await axios.get(`${import.meta.env.VITE_CON}`)
   if(responce.data<1){
    navigate('/')
   }
   

  } catch (error) {
    console.log(error.message);
    
  }
 }
 fetchApi()
},[]
)
  return (
    <div>
      <Nav/>
<div className='flex justify-center items-center w-full mt-10 px-2' style={{height:'calc(100vh - 120px)'}} >
   <div className="bg-background relative flex size-full max-w-lg  justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
      <span className="pointer-events-none bg-linear-to-b from-red-300 to-red-900 bg-clip-text text-center text-6xl sm:text-6xl md:text-6xl lg:text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        Welcome
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
</div>
    </div>
  )
}

export default Main