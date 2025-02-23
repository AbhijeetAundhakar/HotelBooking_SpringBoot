import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import AboutUs from "../AboutUs/AboutUs";

const HomePage = () => {
    return (
        <>
        <div className="homepage-container">
            <header className="header text-center">
                <h1>Hotel Sanman</h1>
                <p>Enjoy a luxurious stay with us.</p>
            </header>



            <section className="buttonExplore">
                    <Link to="/roomslist">
                        <button>Explore rooms</button>
                    </Link>
            </section>

        </div>
        <AboutUs />
        </>
    );
};

export default HomePage;
