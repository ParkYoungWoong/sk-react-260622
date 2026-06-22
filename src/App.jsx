import Button from '@/components/Button'

export default function App() {
  const xyz = 123
  return (
    <>
      <Button
        variant="primary"
        type="submit"
        onClick={function () {
          console.log('clicked!!!')
        }}>
        추가
      </Button>
      <Button variant="danger">삭제</Button>
      <Button variant="secondary">취소</Button>
    </>
  )
}
