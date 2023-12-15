import { GoProjectRoadmap } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

export const SideBar = () => {
  return (
    <div className="pt-6 text-[20px] h-screen font-semibold w-[260px] px-3 flex items-center flex-col flex-shrink-0">
        <div className="flex mb-8 items-center justify-center" >
            <img src="/logo.png" alt="logo"/>
            <div className="text-[30px] font-bold"> Sync<span className="text-[#3ADAD9]">Hub</span></div>
        </div>
        <Link className="flex gap-3 items-center justify-center hover:text-white py-4 rounded-xl w-full hover:bg-[#3ADAD9]">
            <GoProjectRoadmap className="w-6 h-6"/>
            <h4>Project</h4>
        </Link>
        <Link className="flex gap-3 items-center justify-center hover:text-white py-4 rounded-xl w-full hover:bg-[#3ADAD9]">
            <CiSettings className="w-6 h-6"/>
            <h4>Settings</h4>
        </Link>
        <Link className="flex text-red-500 mt-auto mb-4 gap-3 items-center justify-center py-4 rounded-xl w-full ">
            <CiLogout  className="w-6 h-6"/>
            <h4>Logout </h4>
        </Link>
        

    </div>
  )
}
