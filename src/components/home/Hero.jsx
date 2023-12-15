import image1 from "../../assets/picture.png"
import image2 from "../../assets/Vector.png"
import './app.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">   
        <div className="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae, earum laudantium quod dolor impedit ullam harum sit quidem consectetur fugit quia culpa officia molestiae aut eius praesentium <span>numquam minima.</span></p>
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
