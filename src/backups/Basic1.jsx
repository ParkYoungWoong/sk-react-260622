import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  function renderCountElement() {
    if (count === 1) {
      return <h2>1</h2>
    } else if (count === 2) {
      return <h2>2</h2>
    } else if (count === 3) {
      return <h2>3</h2>
    } else {
      return <h2>4</h2>
    }
  }

  return (
    <>
      <h1
        className={count > 3 ? 'active' : ''}
        style={{ backgroundColor: 'green' }}
        onClick={function () {
          const newCount = count + 1
          setCount(newCount)
          console.log(newCount)
        }}>
        Hello {count}!
      </h1>
      {renderCountElement()}
    </>
  )
}
