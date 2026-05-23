import "./App.css"
import bg from "./image/bg.jpg"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Reviews from "./pages/Reviews.jsx"
import Contacts from "./pages/Contacts.jsx"
import Cart from "./pages/Cart.jsx"

import Navbar from "./componet/Navbar/navbar.jsx"

function App() {
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        setCart([...cart, product])
    }
    const removeFromCart = (indexToRemove) => {
        setCart(
            cart.filter((_, index) => index !== indexToRemove)
        )
    }
    return (
        <div
            className="parallax"
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home addToCart={addToCart} />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/reviews"
                    element={<Reviews />}
                />
                <Route
                    path="/contacts"
                    element={<Contacts />}
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    }
                />
            </Routes>
        </div>
    )
}

export default App





















// import { Routes, Route, } from "react-router-dom"

// import "./App.css"
// import bg from "./image/bg.jpg"
// import Hero from "./componet/1HeroSection/herosection.jsx"
// import Features from "./componet/2FeaturesSection/featuressectin.jsx"
// import AboutSec from "./componet/3AboutSection/aboutsectin.jsx"
// import ProductsSec from "./componet/4ProductsSection/productssection.jsx"
// import EventsSec from "./componet/5EventsSection/eventssection.jsx"
// import Contacts from "./componet/6ContactsSection/contactssection.jsx"
// import Footer from "./componet/7FooterSection/footersection.jsx"

// function App() {
//     return (
//         <div
//             className="parallax"
//             style={{
//                 backgroundImage: ` url(${bg})`
//             }}
//         >
//             <Hero />
//             <Routes>
//                 {/* <Route path="/" element={< />} /> */}
//                 {/* <Route path="/about" element={<AboutSec />} /> */}
//                         {/* <Route path="/contact" element={<Contact />} /> */}
//                         {/* <Route path="/price" element={<Price />} /> */}
//                         {/* <Route path="*" element={<NotFound />} /> */}
//             </Routes>
//             <Features />
//             <AboutSec />
//             <ProductsSec />
//             <EventsSec />
//             <Contacts />
//             <Footer />

//         </div>
//     )

// }

// export default App

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