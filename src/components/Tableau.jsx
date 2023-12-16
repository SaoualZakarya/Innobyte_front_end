import { IoIosArrowDown } from "react-icons/io";


export const Tableau = () => {
  return (
    <div className="text-[22px]" >
        <table className="w-full text-base">
            <thead className="">
                <tr>
                    <th  className="p-4">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4"/>
                            <div>Task name</div>
                        </div>
                    </th>
                    <th className="p-4">Deadline</th>
                    <th className="p-4">Employees</th>
                    <th className="p-4">Action</th>
                    <th className="p-4">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  className="p-4">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4"/>
                            <div>Fadi elkbir</div>
                        </div>
                    </td>
                    <td className="p-4">12 Aug 2022 - 12:25 am</td>
                    <td className="p-4">
                        <div className="images">
                            <img src="/zaki.jpg" alt="img" />
                            <img src="/zaki.jpg" alt="img" />
                        </div>
                    </td>
                    <td className="p-4"><span>pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                    <td className="p-4"><span className="bg-green-300">pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                </tr>
                <tr>
                    <td  className="p-4">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4"/>
                            <div>Fadi elkbir</div>
                        </div>
                    </td>
                    <td className="p-4">12 Aug 2022 - 12:25 am</td>
                    <td className="p-4">
                        <div className="images">
                            <img src="/zaki.jpg" alt="img" />
                            <img src="/zaki.jpg" alt="img" />
                        </div>
                    </td>
                    <td className="p-4"><span>pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                    <td className="p-4"><span className="bg-green-300">pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                </tr>
                <tr>
                    <td  className="p-4">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4"/>
                            <div>Fadi elkbir</div>
                        </div>
                    </td>
                    <td className="p-4">12 Aug 2022 - 12:25 am</td>
                    <td className="p-4">
                        <div className="images">
                            <img src="/zaki.jpg" alt="img" />
                            <img src="/zaki.jpg" alt="img" />
                        </div>
                    </td>
                    <td className="p-4"><span>pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                    <td className="p-4"><span className="bg-green-300">pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                </tr>
                <tr>
                    <td  className="p-4">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-4 h-4"/>
                            <div>Fadi elkbir</div>
                        </div>
                    </td>
                    <td className="p-4">12 Aug 2022 - 12:25 am</td>
                    <td className="p-4">
                        <div className="images">
                            <img src="/zaki.jpg" alt="img" />
                            <img src="/zaki.jpg" alt="img" />
                        </div>
                    </td>
                    <td className="p-4"><span>pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                    <td className="p-4"><span className="bg-green-300">pending  <IoIosArrowDown className="inline ml-1"/> </span></td>
                </tr>
            </tbody>
        </table>    
    </div>
  )
}
