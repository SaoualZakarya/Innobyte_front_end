import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Home } from "./components/ui/Home"
import { Sign_in } from "./components/auth/Sign_in"
import { Login } from "./components/auth/Login"
import { UserLayout } from "./pages/UserLayout"
import {Projects} from './components/user/Projects'
import {ProjectLayout} from './pages/ProjectLayout'
import {Tasks} from './components/user/Tasks'
import {Calender} from './components/user/Calender'
import {Chat} from './components/user/Chat'

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
