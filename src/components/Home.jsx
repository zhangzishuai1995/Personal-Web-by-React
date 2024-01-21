import Hero from "./Hero";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Skill from "./Skills";
import ContactMe from "./ContactMe";


export default function Home () {
    return(
        <>
            <Hero/>
            <Skill/>
            <Experience/>
            <Portfolio/>
            <Footer/>
        </>
    )
}