import image1 from "../../assets/picture.png"
import image2 from "../../assets/Vector.png"
import './app.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">   
        <div className="text">
          <p><span>Sync<span>Hub,</span></span> Elevated collaboration with a seamless workspace connecting teams. Effortless communication, amplified productivity.</p>
          <div className="buttons">
            <button>SyncHub for entreprises</button>
            <button>Free trial</button>
          </div>
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
