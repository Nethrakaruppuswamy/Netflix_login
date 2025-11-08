import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()



  const handleLogout = async()=>{
try {
  axios.post(`${import.meta.env.VITE_SIGNUP}`,{mail:'',pass:''})
navigate('/')
} catch (error) {
  
}
  }
  return (
    <div className='w-full z-50 px-5 flex justify-between items-center sm:px-10 md:px-15 sticky top-0'>
        <img src="./logo.png" className='w-[150px] drop-shadow-sm drop-shadow-black' alt="logo"/>
{
  location.pathname == '/main' && <button onClick={handleLogout} className=' bg-red-600 text-lg p-1 px-2 cursor-pointer text-white  rounded '>Logout</button>

}    </div>
  )
}

export default Nav