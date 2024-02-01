import React from "react";
import Navbar from "../Components/Navbar/Navbar"
import Contact from "../Components/Contact/contact"
import Footer from "../Components/Footer/Footer"


const ContactLayout =() => {
    return(
        <>
            <div> 
                <Navbar/>
                <Contact />
                <Footer />
            </div>
        </>
    )
};

export default ContactLayout;
