let restaurant = {
    name : 'asdf',
    guestCapacity : 100,
    guestCount : 0,
    checkAvailability: function (partySize) {
        let availableSeats = this.guestCapacity - this.guestCount;
        return availableSeats >= partySize;
    },
    seatParty: function (seat_number){
        this.guestCount = this.guestCount + seat_number;
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(50))
restaurant.removeParty(70)
console.log(restaurant.checkAvailability(2))


