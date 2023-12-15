import image1 from "../../assets/picture.png"
import image2 from "../../assets/Vector.png"
import './app.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">   
        <div className="text">
          <p><span>SyncHub</span>: Elevate collaboration with a seamless online workspace connecting teams and researchers. Effortless communication, amplified productivity. Welcome to the future of teamwork.</p>
        </div>
        <div className="img">
          <img src={image1} alt="picture of calloboration" />
        </div>
      </div>
      <div className="vectors">
        <img src={image2} alt="" />
        <img src={image2} alt="" />
        <img src={image2} alt="" />
      </div>
    </section>
  )
}
