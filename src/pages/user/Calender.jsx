import { CalenderComponent } from "../../components/CalenderComponent"

export const Calender = () => {
  return (
    <div className="p-8">
      <div className="my-6 bg-white flex-wrap h-fit p-8 rounded-xl flex justify-around gap-14">
        <div className="flex flex-col justify-between  " > 
          <h4 className="text-xl text-[#6C6C6C]">Total of working hours per week</h4>
          <div className="flex justify-between items-center">
            <div className="bg-[#8EB8BE33] z-0 h-2 rounded-xl w-[140px] relative"><div className="absolute left-0 rounded-xl z-40 bg-[#337E89] h-full w-[80%]"></div></div>
            <span className="text-[28px]">546h</span>
          </div>
        </div>
        <div className="flex flex-col justify-between working-time">
          <h4 className="text-xl text-[#6C6C6C]">Employee working time dashboard</h4>
          <div className="bg-[#8EB8BE33] mb-3 z-0 h-2 rounded-xl w-[650px] relative">
            <div className="absolute left-0 rounded-xl z-40 bg-[#337E89] h-full w-[50%]"></div>
            <div className="absolute left-[320px] rounded-xl z-40 bg-red-500 h-full w-[20%]"></div>
            <div className="absolute left-[440px] rounded-xl z-40 bg-blue-600 h-full w-[15%]"></div>
          </div>
        </div>
      </div>
      <div className="my-20 rounded-xl p-12 bg-white">
        <CalenderComponent/>
      </div>
    </div>
  )
}
