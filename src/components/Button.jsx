export default function Button(props) {
  const { variant, children, ...restProps } = props
  function getVariant() {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-400'
      case 'danger':
        return 'bg-red-500 hover:bg-red-400'
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-400'
    }
  }
  return (
    <button
      // {...{
      //   type: 'submit',
      //   onContextMenu: function () {},
      //   onWheel: function () {},
      //   onKeyDown,
      //   function() {},
      //   onMouseEneter: function () {}
      // }}
      {...restProps}
      className={`h-[36px] min-w-[100px] cursor-pointer rounded-md bg-blue-500 px-[10px] text-white hover:bg-blue-400 ${getVariant()}`}>
      {children}
    </button>
  )
}

const user = {
  name: 'HEROPY',
  age: 85,
  isValid: true,
  emails: ['theseq@gmail.com', 'theseq@naver.com']
}

// const age = user.age
// const isValid = user.isValid
const { age, isValid, ...rest } = user
console.log(age) // 85
console.log(isValid) // true
console.log(rest)
// { name: 'HEROPY', emails: ['theseq@gmail.com', 'theseq@naver.com'] }
