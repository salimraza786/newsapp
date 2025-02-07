import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsPage from "./Components/NewsPage"


const App = () => {
  const[category , setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsPage category={category}/>
    </div>
  )
}

export default App
