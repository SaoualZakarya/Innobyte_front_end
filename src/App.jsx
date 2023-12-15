import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from "./components/ui/Home"
import { Sign_in } from "./components/auth/Sign_in"
import { Login } from "./components/auth/Login"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Sign_in/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
