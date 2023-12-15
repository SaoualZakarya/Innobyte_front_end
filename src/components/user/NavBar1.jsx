import { IoIosNotificationsOutline } from "react-icons/io"

export const NavBar1 = () => {
  return (
    <div className="px-12 flex w-full items-center justify-between py-2 my-2 border-b-0 border-solid border- ">
        <div className="text-[22px] text-[#333333]">Dashboard</div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#FEF5EA] text-[17px] font-semibold px-3 py-2" >
            SyncHub
          </div>
          <div className="relative">
            <span className="w-3 h-3 rounded-[50%] bg-red-500 absolute"></span>
            <IoIosNotificationsOutline className="w-9 h-9 text-[#5570F1]" />
          </div>
          <img className="w-10 h-10 rounded-xl" src="/zaki.jpg" alt="zaki"/>
        </div>
    </div>
  )
}
