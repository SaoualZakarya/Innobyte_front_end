import image1 from '../../assets/person1.png'
import image2 from '../../assets/country.png'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export const Settings = () => {
  return (
    <section className="settings">
      <div className="header">
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
      <div className="main">
        <div>
          <h3>Account Settings</h3>
          <button>Update</button>
        </div>
        <div className="personal">
          <form action="#">
            <div className='ght'>
              <label htmlFor="firstName">First Name</label>
              <span><FaRegUser /></span>
              <input type="text" id="firstName" value={'Osman'}/>
            </div>
            <div className="ght">
              <label htmlFor="lastName">Last Name</label>
              <span><FaRegUser /></span>
              <input type="text" id='lastName' value={'Dokyn'}/>
            </div>
            <div className="ght">
              <label htmlFor="email">Email</label>
              <span><MdOutlineEmail /></span>
              <input type="email" id="email" value={'usmanndako@gmail.com'} />
            </div>
            <div className="ght">
              <label htmlFor="phoneNumber">Phone Number</label>
              <div>
                <div>
                  <select>
                    <option value="">+213</option>
                    <option value="">+212</option>
                    <option value="">+211</option>
                    <option value="">+210</option>
                    <option value="">+209</option>
                  </select>
                </div>
                <input type="number" placeholder='Your Phone Number' value={'0540032124'}/>
              </div>
            </div>
            <div className="ght">
              <label htmlFor="address">Address</label>
              <span><CiLocationOn /></span>
              <input type='text' id='address' value={'Ain Bessem, Bouira'}/>
            </div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={'Ain Bessem'}/>
            <div>
              <div>
                <label htmlFor="country">Country</label>
                  <select id='country'>
                    <option value="">Algeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Tunisie</option>
                    <option value="">Maroc</option>
                  </select>
              </div>
              <div>
                <label htmlFor="state">State</label>
                <select id="state">
                  <option value="">Bouira</option>
                  <option value="">Setif</option>
                  <option value="">Oran</option>
                  <option value="">Blida</option>
                </select>
              </div>
            </div>
          </form>
          <div className="image">
            <img src={image1} alt="person" />
          </div>
        </div>
      </div>
    </section>
  )
}
