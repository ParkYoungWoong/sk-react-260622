import { useState } from 'react'

export default function App() {
  // let count = 0
  const [count, setCount] = useState(0)
  return (
    <>
      <h1
        onClick={function () {
          const newCount = count + 1
          setCount(newCount)
          console.log(newCount)
        }}>
        Hello {count}!
      </h1>
    </>
  )
}
