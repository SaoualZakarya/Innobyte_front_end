import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <div className=" w-full flex flex-wrap gap-6  min-h-[89vh] p-8 bg-[#F3F4F6]">
        <Link to={'/project'} className="flex rounded-xl h-[250px] w-[460px]">
          <img src="/project.jpg" className="rounded-l-[15px]" alt="project"/>
          <div className="flex p-4 rounded-r-[15px] bg-white flex-col justify-between">
            <div>
              <h2 className="font-bold text-[18px] text-[#1F2937]">Project A</h2>
              <p className="text-[#6B7280]">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </p>
            </div>
              <p className="text-[#6B7280]">
                Last updated 5 mins ago
              </p>
          </div>
        </Link>
        <Link to={'/project'} className="flex rounded-xl h-[250px] w-[460px]">
          <img src="/project.jpg" className="rounded-l-[15px]" alt="project"/>
          <div className="flex p-4 rounded-r-[15px] bg-white flex-col justify-between">
            <div>
              <h2 className="font-bold text-[18px] text-[#1F2937]">Project B</h2>
              <p className="text-[#6B7280]">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </p>
            </div>
              <p className="text-[#6B7280]">
                Last updated 5 mins ago
              </p>
          </div>
        </Link>
        <Link to={'/project'} className="flex rounded-xl h-[250px] w-[460px]">
          <img src="/project.jpg" className="rounded-l-[15px]" alt="project"/>
          <div className="flex p-4 rounded-r-[15px] bg-white flex-col justify-between">
            <div>
              <h2 className="font-bold text-[18px] text-[#1F2937]">Project C</h2>
              <p className="text-[#6B7280]">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </p>
            </div>
              <p className="text-[#6B7280]">
                Last updated 5 mins ago
              </p>
          </div>
        </Link>
      <button className="fixed flex justify-center font-bold items-center text-white bottom-[50px] right-[50px] bg-[#3ADAD996] w-10 h-10 rounded-xl">
        <IoAdd className="w-6 h-6"/>
      </button>
    </div>
  )
}
