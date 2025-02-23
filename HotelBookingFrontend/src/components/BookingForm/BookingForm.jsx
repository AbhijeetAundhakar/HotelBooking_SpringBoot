import { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

const BookingForm = ({ roomName, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        roomType: roomName
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/bookings", formData);
            alert("Booking successful!");
            onClose(); // Close the form after successful booking
        } catch (error) {
            console.error("Error booking room:", error);
            alert("Booking failed.");
        }
    };

    return (
        <div className="overlay">
            <div className="form-container">
                <h2>Book {roomName}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                    <input type="date" name="checkInDate" onChange={handleChange} required />
                    <input type="date" name="checkOutDate" onChange={handleChange} required />
                    <button type="submit">Confirm Booking</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
