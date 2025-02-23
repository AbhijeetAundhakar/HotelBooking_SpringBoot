package com.hotelbooking.booking.HotelBooking.repolayer;

import com.hotelbooking.booking.HotelBooking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
