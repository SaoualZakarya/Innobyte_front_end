import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from "./components/ui/Home"
import { Sign_in } from "./components/auth/Sign_in"
import { Login } from "./components/auth/Login"
import { UserLayout } from "./pages/UserLayout"
import {Project} from './components/user/Project'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Sign_in/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<UserLayout/>} >
            <Route index element={<Project/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
