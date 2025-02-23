package com.hotelbooking.booking.HotelBooking.repolayer;


import com.hotelbooking.booking.HotelBooking.model.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacilityRepository extends JpaRepository<Facility, Long> {}
