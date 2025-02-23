package com.hotelbooking.booking.HotelBooking.controller;


import com.hotelbooking.booking.HotelBooking.model.Facility;
import com.hotelbooking.booking.HotelBooking.model.Room;
import com.hotelbooking.booking.HotelBooking.repolayer.FacilityRepository;
import com.hotelbooking.booking.HotelBooking.repolayer.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private FacilityRepository facilityRepository;

    // Get all rooms
    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // Add a room
    @PostMapping
    public Room addRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    // Add a facility to a room
    @PostMapping("/{roomId}/facilities")
    public Facility addFacility(@PathVariable Long roomId, @RequestBody Facility facility) {
        return roomRepository.findById(roomId).map(room -> {
            facility.setRoom(room);
            return facilityRepository.save(facility);
        }).orElseThrow(() -> new RuntimeException("Room not found"));
    }
}
