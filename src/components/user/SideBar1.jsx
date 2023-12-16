import { GoProjectRoadmap } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import {NavLink,Link} from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const SideBar1 = () => {
  return (
    <div className="fixed bg-white pt-6 text-[20px] h-screen font-semibold w-[100px] px-3 flex flex-col flex-shrink-0">
        <div className="flex mb-8 items-center justify-center" >
            <img src="/logo.png" alt="logo"/>
            <div className="text-[30px] font-bold hidden"> Sync<span className="text-[#3ADAD9]">Hub</span></div>
        </div>
        <NavLink to={'/project/'} className={`flex gap-3 justify-center items-center pl-3  py-4 rounded-xl w-full hover:text-white hover:bg-[#3ADAD9]`}>
            <GoProjectRoadmap className="w-6 h-6"/>
            <h4 className="hidden">Tasks</h4>
        </NavLink>
        <NavLink to={'calender'} className={`flex gap-3 justify-center items-center pl-3  py-4 rounded-xl w-full hover:text-white hover:bg-[#3ADAD9]`}>
            <FaCalendarAlt className="w-6 h-6"/>
            <h4 className="hidden">Calender</h4>
        </NavLink>
        <NavLink to={'chat'} className={`flex gap-3 justify-center items-center pl-3  py-4 rounded-xl w-full hover:text-white hover:bg-[#3ADAD9]`}>
            <IoChatbubbleEllipsesOutline className="w-6 h-6"/>
            <h4 className="hidden">Chat</h4>
        </NavLink>
        <NavLink to={'settings'} className="flex gap-3 justify-center items-center pl-3 hover:text-white py-4 rounded-xl w-full hover:bg-[#3ADAD9]">
            <CiSettings className="w-6 h-6"/>
            <h4 className="hidden">Settings</h4>
        </NavLink>
        <Link className="flex text-red-500 mt-auto  mb-4 gap-3 items-center justify-center py-4 rounded-xl w-full ">
            <CiLogout  className="w-6 h-6"/>
            <h4 className="hidden">Logout </h4>
        </Link>

    </div>
  )
}
