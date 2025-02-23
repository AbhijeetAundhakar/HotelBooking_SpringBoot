package com.hotelbooking.booking.HotelBooking.repolayer;

import com.hotelbooking.booking.HotelBooking.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
