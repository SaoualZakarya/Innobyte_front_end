import { IoPieChartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { Tableau } from "../../components/Tableau";

export const Tasks = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-10 overflow-x-auto">
        <div className="bg-white col-span-1 rounded-xl p-4">
          <div className='flex items-center justify-between'>
            <div className='bg-slate-100  p-3 rounded-xl'>
              <IoPieChartOutline className="w-8 h-8"/>
            </div>
            <div className="flex items-center text-[20px] gap-4">
              <div className="text-gray-500 text-base">This Week</div>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="pt-10 flex px-4">
            <div className="w-[50%] ">
              <h2 className="text-[#8B8D97] text-[18px]">Tasks</h2>
              <p className="text-[25px]">10</p>
            </div>
            <div className="w-[50%] ">
              <h2 className="text-[#8B8D97] text-[18px]">Done</h2>
              <p className="text-[25px]">0</p>
            </div>
          </div>
        </div>
        <div className="bg-white col-span-1 rounded-xl p-4">
          <div className='flex items-center justify-between'>
            <div className='bg-yellow-100  p-3 rounded-xl'>
              <FiUsers className="w-8  h-8"/>
            </div>
            <div className="flex items-center text-[20px] gap-4">
              <div className="text-gray-500 text-base">This Week</div>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="pt-10 flex px-4">
            <div className="w-[50%] ">
              <h2 className="text-[#8B8D97] text-[18px]">Employees</h2>
              <p className="text-[25px]">20</p>
            </div>
            <div className="w-[50%] ">
              <h2 className="text-[#8B8D97] text-[18px]">Active</h2>
              <p className="text-[25px]">13</p>
            </div>
          </div>
        </div>
        <button className="text-white font-bold text-[22px] flex items-center h-fit w-fit gap-4 p-3 rounded-xl bg-[#3ADAD996]">
          Add task
          <IoIosAdd className="inline text-white w-7 h-7"/>
        </button>
      </div>
      <div className="mt-10 bg-white p-4 rounded-xl">
        <Tableau/>
      </div>
    </div>
  )
}
