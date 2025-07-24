import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"
function App() {
  

  return (
    <div className="w-screen h-screen text-white bg-gray-700">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App
