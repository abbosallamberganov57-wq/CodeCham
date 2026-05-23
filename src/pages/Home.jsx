// import Style from "./home.module.css"
// import bg from "../image/bg.jpg"
import Hero from "../componet/1HeroSection/herosection.jsx"
import Features from "../componet/2FeaturesSection/featuressectin.jsx"
import AboutSec from "../componet/3AboutSection/aboutsectin.jsx"
import ProductsSec from "../componet/4ProductsSection/productssection.jsx"
import EventsSec from "../componet/5EventsSection/eventssection.jsx"
import ContactsSec from "../componet/6ContactsSection/contactssection.jsx"
import Footer from "../componet/7FooterSection/footersection.jsx"

function Home({ addToCart }) {
    return (
        <div 
        // className={Style.parallax}
        //     style={{
        //         backgroundImage:
        //             ` url(${bg})`}}
                    >
            <Hero />
            <Features />
            <AboutSec />
            <ProductsSec addToCart={addToCart} />
            <EventsSec />
            <ContactsSec />
            <Footer />
        </div>
    )
}

export default Home