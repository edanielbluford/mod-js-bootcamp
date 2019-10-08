let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailablity: function(partysize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partysize <= seatsLeft;
  },
  seatParty: function(partysize) {
    this.guestCount += partysize;
  },
  removeParty: function(partysize) {
    this.guestCount -= partysize;
  }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailablity(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailablity(4));
