import { BrowserRouter,Route,Routes } from "react-router-dom"
import { MainLayout } from "./components/MainLayout"
import {Home} from './pages/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
