import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"

import { SubHeader } from "./components/SubHeader"

function App() {


  return (
    <>
    <div className = "w-[1728px] bg-gray-100">
      <Header />
      <SubHeader />
      <Dashboard />
      
      </div>
    </>
  )
}

export default App
