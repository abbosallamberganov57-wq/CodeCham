import "./App.css"
import bg from "./image/bg.jpg"
import Hero from "./componet/1HeroSection/herosection.jsx"
import Features from "./componet/2FeaturesSection/featuressectin.jsx"
import AboutSec from "./componet/3AboutSection/aboutsectin.jsx"
import ProductsSec from "./componet/4ProductsSection/productssection.jsx"
import EventsSec from "./componet/5EventsSection/eventssection.jsx"
import Contacts from "./componet/6ContactsSection/contactssection.jsx"
import Footer from "./componet/7FooterSection/footersection.jsx"
function App() {
    return (
        <div
            className="parallax"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg})`
            }}
        >
            <Hero />
            <Features />
            <AboutSec />
            <ProductsSec />
            <EventsSec />
            <Contacts />
            <Footer />
        </div>
    )

}

export default App

//   <BrowserRouter>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//     <Link to="/price">Price</Link>
//   </nav>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/price" element={<Price />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
//   </BrowserRouter>