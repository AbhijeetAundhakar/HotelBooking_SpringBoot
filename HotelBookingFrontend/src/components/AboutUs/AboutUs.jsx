import React from "react";
import styles from './About.module.css'; // Use CSS Modules for scoped styles
import ClubRoomImage from "../../assets/8.jpg";
import PartyRoomImage from "../../assets/10.jpg";
import ClassicRoomImage from "../../assets/8.jpg";
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            {/* About Section */}
            <div className={styles.aboutSection}>
                <h2>About Us</h2>
                <p>Welcome to our hotel! We provide the best hospitality and services.</p>
                <p>Enjoy a comfortable stay with modern amenities and excellent customer service.</p>
            </div>

            {/* Services Section */}
            <div className={styles.servicesSection}>
                <h2>Our Rooms and Services</h2>

                {/* Club Room - Appears from the left */}
                <Fade direction="left" triggerOnce>
                    <div className={styles.room}>
                        <div className={styles.roomInfo}>
                            <h3>Club Room</h3>
                            <p><strong>Price:</strong> $2000.00</p>
                            <p><strong>Facilities:</strong> Wi-Fi, Air Conditioning, Swimming Pool</p>
                        </div>
                        <div className={styles.roomImage}>
                            <img src={ClubRoomImage} alt="Club Room" />
                        </div>
                    </div>
                </Fade>

                {/* Party Room - Appears from the right */}
                <Fade direction="right" triggerOnce>
                    <div className={styles.room}>
                        <div className={styles.roomInfo}>
                            <h3>Party Room</h3>
                            <p><strong>Price:</strong> $3000.00</p>
                            <p><strong>Facilities:</strong> Wi-Fi, Gym</p>
                        </div>
                        <div className={styles.roomImage}>
                            <img src={PartyRoomImage} alt="Party Room" />
                        </div>
                    </div>
                </Fade>

                {/* Classic Room - Appears from the left */}
                <Fade direction="left" triggerOnce>
                    <div className={styles.room}>
                        <div className={styles.roomInfo}>
                            <h3>Classic Room</h3>
                            <p><strong>Price:</strong> $1500.00</p>
                            <p><strong>Facilities:</strong> Wi-Fi, Breakfast Included</p>
                        </div>
                        <div className={styles.roomImage}>
                            <img src={ClassicRoomImage} alt="Classic Room" />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default AboutUs;