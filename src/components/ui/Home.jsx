import { NavBar } from "../NavBar"
import { Hero } from "../Hero"
import { Features } from "../Feautures"
import { What_we_do } from "../What_we_do"

export const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero/>
        <Features />
        <What_we_do/>
    </div>
  )
}
