import image1 from '../../assets/women.png'

export const Customers = () => {
  return (
    <section className="customers">
      <div className="container">
        <h3>What our customors <span>says ?</span></h3>
        <div className="box">
          <div className="img">
            <img src={image1} alt="customer" />
          </div>
          <div className="text">
            <p>it's all about finding the right people to collaborate with, and nothing made that process any smoother than SyncHub, effiency and team collaboration all in one place</p>
            <h4>Amaka Micheal</h4>
            <p>machine learning engineer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
