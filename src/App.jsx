import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card10 from './components/card'

let myObject ={
  name: "krishna",
  age : 21
}

let arr =[1,2,3]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green text'>tailwind test</h1>
    <Card10 someObject={myObject} />
      <Card10 channel="chaiaurcode" />
    </>
  )
}

export default App
