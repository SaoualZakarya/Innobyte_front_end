import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sign_in } from "./pages/auth/Sign_in"
import { Login } from "./pages/auth/Login"
import { UserLayout } from "./pages/UserLayout"
import {Projects} from './pages/user/Projects'
import {ProjectLayout} from './pages/ProjectLayout'
import {Tasks} from './pages/user/Tasks'
import {Calender} from './pages/user/Calender'
import {Chat} from './pages/user/Chat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Sign_in/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<UserLayout/>} >
            <Route index element={<Projects/>} />
          </Route>
          <Route path="/project" element={<ProjectLayout/>} >
            <Route index element={<Tasks/>} />
            <Route path="calender" element={<Calender/>} />
            <Route path="chat" element={<Chat/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
