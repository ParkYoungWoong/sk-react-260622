import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['사과', '바나나', '포도'])
  const [name, setName] = useState('')
  const inputRef = useRef()

  function addFruit() {
    setFruits([name, ...fruits])
    setName('')
  }

  // useEffect(실행할함수, 의존성배열)
  useEffect(function () {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={function (event) {
          setName(event.target.value)
        }}
        onKeyDown={function (event) {
          if (event.nativeEvent.isComposing) {
            return
          }
          if (event.key === 'Enter') {
            addFruit()
          }
        }}
      />
      <button
        onClick={function () {
          addFruit()
        }}>
        추가
      </button>
      <ul>
        {fruits.map(function (fruit) {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}
