import image1 from '../../assets/Vector.png'

export const PricePlan = () => {
  return (
    <section id='pricing' className="priceplan">
      <img src={image1} alt="vector" />
      <img src={image1} alt="vector" />
      <h3 className="special">Make the wise decision <br /> for <span>your business</span></h3>
      <p>Choose from our affordable 3 packages</p>
      <div className="container">
        <div className="box">
          <p>Premuim Plan</p>
          <p><span>$29</span>/month</p>
          <p>This package is suitable for teams 1-100 people</p>
          <p>What's incuded:</p>
          <p>20 GB dedicated hosting free</p>
          <p>Best for developers,freelancer 1 year support</p>
          <button>Get Started</button>
        </div>
        <div className="box">
          <p>Basic Plan</p>
          <p><span>$79</span>/month</p>
          <p>This package is suitable for teams 1-100 people</p>
          <p>What's incuded:</p>
          <p>15 GB dedicated hosting free</p>
          <p>Best for developers,freelancer 5 year support</p>
          <p>Free customer domain</p>
          <p>Basic statitics</p>
          <button>Get Started</button>
        </div>
        <div className="box">
          <p>Premuim Plan</p>
          <p><span>$129</span>/month</p>
          <p>This package is suitable for teams 1-100 people</p>
          <p>What's incuded:</p>
          <p>20 GB dedicated hosting free</p>
          <p>Best for developers,freelancer Unlimited support</p>
          <p>Free customer domain</p>
          <p>Full statistics</p>
          <button>Get Started</button>
        </div>
      </div>
      <img src={image1} alt="vector" />
      <div className="container">
        <div className="text">
          <h4>For more, Subscribe now</h4>
          <p>Stay Updated and work accordingly</p>
        </div>
        <form action="#">
          <input type="email" placeholder='Entrer your email adress'/>
          <input type="button" value="Subscribe" />
        </form>
      </div>
    </section>
  )
}
