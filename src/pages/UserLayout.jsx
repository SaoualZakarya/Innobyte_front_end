import { NavBar1 } from "../components/user/NavBar1"
import { SideBar } from "../components/user/SideBar"
import {Outlet} from 'react-router-dom'

export const UserLayout = () => {
  return (
    <div className="flex">
        <SideBar/>
      <div className="w-full">
        <NavBar1/>
        <Outlet/>
      </div>
    </div>
  )
}
