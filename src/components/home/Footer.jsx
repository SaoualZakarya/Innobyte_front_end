import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer id='contact'>
      <div className="container">
        <hr />
        <div className="boxes">
          <div>
          <div className="box">
            <h3>Why us</h3>
            <ul>
              <li><a href="#">Channel</a></li>
              <li><a href="#">Engagement</a></li>
              <li><a href="#">Scale</a></li>
              <li><a href="#">Watch Demo</a></li>
            </ul>
          </div>
          <div className="box">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Entreprise</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>
          <div className="box">
            <h3>Pricing</h3>
            <ul>
              <li><a href="#">Channel</a></li>
              <li><a href="#">Engagement</a></li>
              <li><a href="#">Scale</a></li>
              <li><a href="#">Watch Demo</a></li>
            </ul>
          </div>
          </div>
          
          <div>
            <div className="box">
              <h3>Follow</h3>
              <ul>
                <li><a href="www.facebook.com"><FaFacebook /></a></li>
                <li><a href="www.twitter.com"><FaTwitter /></a></li>
                <li><a href="www.instagram.com"><FaInstagram /></a></li>
                <li><a href="www.snapchat.com"><FaSnapchat /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
