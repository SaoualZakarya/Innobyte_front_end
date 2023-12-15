import { NavBar } from "../home/NavBar"
import { Hero } from "../home/Hero"
import { Features } from "../home/Feautures"
import { What_we_do } from "../home/What_we_do"
import { SetUp } from "../home/SetUp"
import {Customers} from '../home/Customers'
import {Questions} from '../home/Questions'
import { PricePlan } from "../home/PricePlan"
import {Footer} from '../home/Footer'

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
