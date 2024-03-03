import { useState, useCallback, useContext } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [schar, setschar] = useState(false)
  const [num, setnum] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {

    let str = ''
    let allowdStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) allowdStr += "0123456789"
    if (schar) allowdStr += "!@#$%^&*()"

    for (let index = 1; index <= length; index++) {
      str = allowdStr.charAt(Math.floor(Math.random() * allowdStr.length + 1))

    }
    setPassword(str)
  }, [length, num, schar, setPassword])
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400
    bg-slate-800'> <h2 className='text-center text-2xl pt-4'>Password Generator</h2>
        <div className='flex rounded-lg shadow-lg overflow-hidden mb-4 p-10'>
          <input type="text"
            value={password} className='outline-none w-full py-1 px-3 rounded-md mr-1'
            placeholder='password' readOnly />
          <button className='rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
            Copy
          </button>
        </div>
        <div className='flex text-sm pb-8 mr-8'>
          
            <input type="range" 
            min={6}
            max={15}
            value={length} 
            className='ml-10 mb-16 p-2'/>  Length:{length}
          
        </div>
      </div>
    </>
  )
}

export default App
