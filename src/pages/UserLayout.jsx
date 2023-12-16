import { NavBar1 } from "../components/user/NavBar1"
import { SideBar } from "../components/user/SideBar"
import {Outlet} from 'react-router-dom'

export const UserLayout = () => {
  return (
    <div className="flex">
      <SideBar/>
      <div className="relative  ml-auto w-[calc(100vw-300px)]">
        <NavBar1/>
        <div className="pt-[73.5px] bg-[#F3F4F6] rounded-xl ">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
