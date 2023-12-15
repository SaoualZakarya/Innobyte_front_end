import image1 from '../../assets/picture2.png'

export const Features = () => {
    return(
        <section id='feature' className="features">
            <h2>Our <span>Feautures</span></h2>
            <div className="container">
                    <div className="image">
                        <img src={image1} alt="picture" />
                    </div>
                    <div className="text">
                        <h3 className='special'>Manage everything in one workspace</h3>
                        <p>Efficiently <span> manage tasks, track progress</span>, and engage in conversations through dedicated chat spaces within <span> customizable workspaces</span>—all consolidated in one unified platform.</p>
                    </div>
            </div>
        </section>
    )
}