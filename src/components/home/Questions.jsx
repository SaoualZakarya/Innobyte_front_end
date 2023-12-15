import { useState } from "react"

export const Questions = () => {
  const [toggle, setToggle] = useState(false)
  const data = [
    {title: 'What is the working procedure of the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {title: 'How is the app helpful?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {title: 'Is the app workable while you got no internet?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {title: 'Who should use the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
    {title: 'What are the security measure of the app?', desc: 'All our users like the amazing features and illustration of our app and it effective working procedure. Most of them are highly satisfied with our support and collaboration ideas which are counted as quite an essential in the tech business. With a team of highly creative and lively developers and manager, all our issues are promised to be solved in no time at all.'},
  ]


  return (
    <div className="container">
      <h3 className="special">Frequently asked <span>questions</span></h3>
      <ul className="faq">
        {data.map((l, i) => 
          <li key={i}>
            <div className="q" onClick={() => {setToggle(!toggle)}} >
              <span className="text-xl">{l.title}</span>
              <span className="arrow"></span>
            </div>
            {toggle &&
              <div key={i} className="a">
                <p>{l.desc}</p>
              </div>
            }
          </li>
        )}
      </ul>
    </div>
  )
}
