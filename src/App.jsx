
import './App.css'
import Header from './component/main_component/Header'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
     <div className="flex h-screen">
      <Header/>
      <main className="bg-black text-white flex-1 overflow-y-auto p-6">
        <Outlet/>
      </main>
      {/* <Footer/> */}
      </div>
    </>
  )
}

export default App
