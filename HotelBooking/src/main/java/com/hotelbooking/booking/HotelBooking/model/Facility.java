package com.hotelbooking.booking.HotelBooking.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // e.g., Wi-Fi, AC, Projector, Sound System

    @ManyToOne
    @JoinColumn(name = "room_id")
    @JsonBackReference
    private Room room;

    // Constructors
    public Facility() {}

    public Facility(String name, Room room) {
        this.name = name;
        this.room = room;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Room getRoom() { return room; }
    public void setRoom(Room room) { this.room = room; }
}
