import image1 from '../../assets/picture3.png'
export const SetUp = () => {
  return (
    <section className="setup">
      <div className="container">
        <div className="text">
          <h3 className='special'>Set up in minutes</h3>
          <p>Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.
          Choose from hundreds of pre-made templates and tell stories with data
          with our easy drag-and-drop infographic creator.</p>
        </div>
        <div className="image">
          <img src={image1} alt="" />
        </div>
      </div>
    </section>
  )
}
