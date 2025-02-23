import { useState, useEffect } from "react";
import axios from "axios";
import "./RoomList.css";
import BookingForm from "../BookingForm/BookingForm"; // Import the BookingForm component
import clubRoomImg from "../../assets/party.jpg";
import familyRoomImg from "../../assets/5.jpg";
import partyRoomImg from "../../assets/10.jpg";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null); // Track selected room for booking

    useEffect(() => {
        axios.get("http://localhost:8080/rooms") // Update with your API URL
            .then(response => setRooms(response.data))
            .catch(error => console.error("Error fetching rooms:", error));
    }, []);

    // Sample images for different room types
    const roomImages = {
        "Club Room": clubRoomImg,
        "Family Room": familyRoomImg,
        "Party Room": partyRoomImg,
        "Deluxe Room": "https://source.unsplash.com/400x300/?luxury-hotel"
    };

    return (
        <div className="room-list-container p-5">
            {rooms.map(room => (
                <div key={room.id} className="room-card m-5 p-1">
                    <img src={roomImages[room.name] || "https://source.unsplash.com/400x300/?room"}
                        alt={room.name} className="room-image" />
                    <div className="room-details">
                        <h2 className="room-title">{room.name}</h2>
                        <h3 className="facility-title">Facilities:</h3>
                        <ul className="facility-list">
                            {room.facilities.map(facility => (
                                <li key={facility.id}>{facility.name}</li>
                            ))}
                        </ul>
                        <button className="book-button" onClick={() => setSelectedRoom(room.name)}>
                            Book Now
                        </button>
                    </div>
                </div>
            ))}

            {/* Show BookingForm when a room is selected */}
            {selectedRoom && (
                <BookingForm roomName={selectedRoom} onClose={() => setSelectedRoom(null)} />
            )}
        </div>
    );
};

export default RoomList;
