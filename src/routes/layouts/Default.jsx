import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router'

export default function Default() {
  return (
    <main>
      <div className="fixed top-0 left-0 box-border h-screen w-[250px] border-r border-gray-300">
        <Sidebar />
      </div>
      <div className="ml-[250px] box-border w-[calc(100vw-250px)]">
        <Outlet />
      </div>
    </main>
  )
}
