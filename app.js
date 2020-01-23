// constructor function to create hotel
function Hotel(name, roomsTotal, roomsBooked, roomService, gym, valet, wifi, pool) {
  this.name = name;
  this.rooms = roomsTotal;
  this.booked = roomsBooked;
  this.roomService = roomService;
  this.gym = gym;
  this.valet = valet;
  this.wifi = wifi;
  this.pool = pool;
  
  this.checkAvailability = function() {
    return rooms - booked;
  };
}

// hotels
var marinerHotel = new Hotel('Mariner', 100, 35, true, true, true, true, true);
var astroHotel = new Hotel('Astro', 125, 50, false, true, false, true, false);
var athleticHotel = new Hotel('Athletic', 115, 40, true, true, true, false, false);
var rangerHotel = new Hotel('Ranger', 90, 30, false, false, false, true, false);


