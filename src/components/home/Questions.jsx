import  { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export const Questions = () => {
  const [data, setData] = useState([
    {toggle:false,title: 'What is the working procedure of the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {toggle:false,title: 'How is the app helpful?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {toggle:false,title: 'Is the app workable while you got no internet?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {toggle:false,title: 'Who should use the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {toggle:false,title: 'What are the security measure of the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
  ]);

  const handleToggle = (index) => {
    const newData = [...data];
    newData[index].toggle = !newData[index].toggle;
    setData(newData);
  };

  return (
    <div id='q&a' className="container ">
      <h3 className="special">Frequently asked <span>questions</span></h3>
      <ul className="faq">
        {data.map((l, i) => 
          <li key={i} className='border-b-2 border-gray-100 py-3'>
            <div className="q mb-4" onClick={() => handleToggle(i)}>
              <span className="text-xl">{l.title}</span>
              <span className="arrow"><IoIosArrowDown /></span>
            </div>
            {l.toggle &&
              <div className="a">
                <p>{l.desc}</p>
              </div>
            }
          </li>

        )}
      </ul>
    </div>
  )
}
