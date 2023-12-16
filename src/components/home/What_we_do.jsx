import { IoChatboxEllipsesOutline } from "react-icons/io5";
export const What_we_do = () => {
  return (
    <div  className="container py-12">
        <div className="title">
            What you 
            <span className="pl-2 text-[#FFCA1D]">
                can do ?
            </span>
        </div>
        <div className="flex flex-wrap gap-14 lg:gap-0 lg:justify-between justify-center">
            
            <div className="w-[300px] flex flex-col items-center   ">
                <div className="w-10 bg-[#3ADAD9] h-10 rounded-2xl flex justify-center items-center">
                    <IoChatboxEllipsesOutline className="w-6 h-6 text-white "/>
                </div>
                <div className="p-5 rounded-xl shadow-lg">
                    <h2 className="text-[#2B3377] text-[22px] py-2 text-center"> Efficient Communication</h2>
                    <p className="text-center">
                        By providing real-time messaging, video conferencing, and seamless file sharing, fostering an efficient communication environment
                    </p>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center   ">
                <div className="w-10 bg-[#FED369] h-10 rounded-2xl flex justify-center items-center">
                    <img src="/icons/graph.png" className="w-6 h-6" alt="g" />
                </div>
                <div className="p-5 rounded-xl shadow-lg">
                    <h2 className="text-[#2B3377] text-[22px] py-2 text-center">flexibilty</h2>
                    <p className="text-center">
                    by breaking barriers, allowing teams to collaborate anytime, anywhere, promoting quick decision-making and idea exchange.
                    </p>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center   ">
                <div className="w-10 bg-[#FED369] h-10 rounded-2xl flex justify-center items-center">
                    <img src="/icons/graph.png" className="w-6 h-6" alt="g" />
                </div>
                <div className="p-5 rounded-xl shadow-lg">
                    <h2 className="text-[#2B3377] text-[22px] py-2 text-center"> enhanced productivity</h2>
                    <p className="text-center">
                    through our integrated suggestion system that studies chat based concerns and works on resolving them
                    </p>
                </div>
            </div>
           
        </div>
    </div>
  )
}
