import { useState , useCallback, useContext} from 'react'



function App() {
  const [length,setlength]= useState(8)
  const [schar,setschar]= useState(false)
  const [num,setnum]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{

    let str = ''
    let allowdStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) allowdStr += "0123456789"
    if(schar) allowdStr += "!@#$%^&*()"
   
    for (let index = 1; index <= length; index++) {
      str = allowdStr.charAt(Math.floor(Math.random()*allowdStr.length +1 ))
           
    }
    setPassword(str)
  },[length,num,schar,setPassword])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-slate-800'> <div className='flex rounded-lg shadow-lg overflow-hidden mb-4'>
    <input type="text" 
    value={password} className='outline-none w-full py-1 px-3' 
    placeholder='password' readOnly/>
    </div></div>
   </>
  )
}

export default App
