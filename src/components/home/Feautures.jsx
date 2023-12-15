import image1 from '../../assets/picture2.png'

export const Features = () => {
    return(
        <section className="features">
            <div className="container">
                <h2>Our <span>Feautures</span></h2>
                <div>
                    <div className="image">
                        <img src={image1} alt="picture" />
                    </div>
                    <div className="text">
                        <h3>Manage everything in one workspace</h3>
                        <p>Planning, tracking and delivering your teams best work has never been easier. An integrated workspace thats simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}