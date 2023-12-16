import { IoIosSearch } from "react-icons/io";
import image1 from '../../assets/person.png'
import { CiCirclePlus } from "react-icons/ci";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

export const Chat = () => {
  return (
    <div className="conversation">
      <div className="teams">
        <div>
          <div className="text">
            <h3>Teams</h3>
            <span>34</span>
          </div>
          <form action="#">
            <IoIosSearch />
            <input type="text" placeholder="Search"/>
          </form>
        </div>
        <ul>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Data Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>AI Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Fouteen</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>DZ Anonymous</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Zaki Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Moh Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Vision Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Deep Learning Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>AI Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
          <li>
            <div className="image">
              <img src={image1} alt="person" />
            </div>
            <div className="text">
              <div>
                <h5>Data Team</h5>
                <p>Hi, i want make enquiries...</p>
              </div>
              <div>
                <span>New</span>
                <span>12:55 am</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="chat">
         <div className="header">
            <img src={image1} alt="person" />
            <p>Data Team</p>
            <div>
              <span>9 Online </span> <span>12:55 am</span>
            </div>
         </div>   
         <div className="main">
          <p>12 August 2022</p>
          <p>Hello, I want to make enquiries about your <br /> product</p><span>12:55 am</span>
          <p>Hello Janet, thank you for reaching out</p><span style={{alignSelf: 'self-end'}}>12:55 am</span>
          <p>What do you need to know? </p><span style={{alignSelf: 'self-end'}}>12:57 am</span>
          <p>Today</p>
          <p>I want to know if the price is negotiable, i need <br /> about 2 Units </p><span>12:55 am</span>
          <ul>
            <li>What do you</li>
            <li>What are you doing</li>
            <li>What do you need to know?</li>
            <li>What do you need to know?</li>
          </ul>
          <form action="#">
            <CiCirclePlus />
            <input type="text" placeholder="Your Message"/>
            <FaFaceSmileBeam/>
            <div>
              <input type="submit" value="Send" />
              <IoIosSend />
            </div>
          </form>
         </div> 
      </div>
    </div>
  )
}