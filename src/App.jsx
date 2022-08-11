import { useState } from 'react'
import './App.css'
import Cover from './Components/cover/Cover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cover/>
    </div>
  )
}

export default App
