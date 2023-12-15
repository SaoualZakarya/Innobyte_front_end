import { NavBar } from "../components/home/NavBar"
import { Hero } from "../components/home/Hero"
import { Features } from "../components/home/Feautures"
import { What_we_do } from "../components/home/What_we_do"
import { SetUp } from "../components/home/SetUp"
import {Customers} from '../components/home/Customers'
import {Questions} from '../components/home/Questions'
import { PricePlan } from "../components/home/PricePlan"
import {Footer} from '../components/home/Footer'

export const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero/>
        <What_we_do/>
        <Features />
        <SetUp/>
        <Customers/>
        <Questions/>
        <PricePlan/>
        <Footer/>
    </div>
  )
}
