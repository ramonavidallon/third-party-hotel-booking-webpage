// constructor function to create hotel
function Hotel(name, city, description, roomsTotal, roomsBooked, roomService, gym, valet, wifi, pool) {
  this.name = name;
  this.city = city;
  this.description = description;
  this.rooms = roomsTotal;
  this.booked = roomsBooked;
  this.roomService = roomService;
  this.gym = gym;
  this.valet = valet;
  this.wifi = wifi;
  this.pool = pool;
  this.checkAvailability = function() {
    if (roomsTotal > roomsBooked) {
      var marinerAvailable = 'The ' + this.name + ' have rooms available';
      var vacancy = document.querySelectorAll('#roomAvailability1', '#roomAvailability2', '#roomAvailability3', '#roomAvailability4');
      vacancy.textContent = marinerAvailable;
    }
    if (roomsTotal <= roomsBooked) {
      var marinerUnavailable = 'The ' + this.name + ' do not have any rooms available';
      var noVacancy = document.querySelectorAll('#roomAvailability1', '#roomAvailability2', '#roomAvailability3', '#roomAvailability4');
      noVacancy.textContent = marinerUnavailable;
    }
  };
}

var hotels = [marinerHotel, astroHotel, athleticHotel, rangerHotel];

// new hotel created
var marinerHotel = new Hotel(
  'Mariners',
  'Seattle, WA',
  'A pacific northwest cozy stay',
  100,
  35,
  true,
  true,
  true,
  true, 
  true);

  // populate city on the card
  var marinerCity = "City: " + marinerHotel.city;
  var elMarinerCity = document.getElementById('hotel1');
  elMarinerCity.textContent = marinerCity;

  // populate description of hotel
  var marinerDescription = marinerHotel.description;
  var elMarinerDescription = document.getElementById('hotelDescription1');
  elMarinerDescription.textContent = marinerDescription;

  // populates if hotel is fully booked or available to book
  var marinerAvailability = marinerHotel.checkAvailability();
  var elMarinerAvailability = document.getElementById('roomAvailability1');
  elMarinerAvailability = marinerAvailability;

  // populates room service availability
  var marinerRoomService = 'Room Service: ' + marinerHotel.roomService;
  var elMarinerRoomService = document.getElementById('roomService1');
  elMarinerRoomService.textContent = marinerRoomService;

  // populates gym availability
  var marinerGym = 'Gym: ' + marinerHotel.gym;
  var elMarinerGym = document.getElementById('gym1');
  elMarinerGym.textContent = marinerGym;

  // populates valet availability
  var marinerValet = 'Valet: ' + marinerHotel.valet;
  var elMarinerValet = document.getElementById('valet1');
  elMarinerValet.textContent = marinerValet;

  // populates wifi availability
  var marinerWifi = 'Wifi: ' + marinerHotel.wifi;
  var elMarinerWifi = document.getElementById('wifi1');
  elMarinerWifi.textContent = marinerWifi;

  // populates pool availability
  var marinerPool = 'Pool: ' + marinerHotel.pool;
  var elMarinerPool = document.getElementById('pool1');
  elMarinerPool.textContent = marinerPool;





// new hotel created
var astroHotel = new Hotel(
  'Astros',
  'Houston, TX',
  'Paying homage to the Astrodome is the Astro Hotel',
  125, 
  50, 
  false, 
  true, 
  false, 
  true, 
  false);

  // populate city on the card
  var astroCity = "City: " + astroHotel.city;
  var elAstro = document.getElementById('hotel2');
  elAstro.textContent = astroCity;

  // populate description of hotel
  var astroDescription = astroHotel.description;
  var elAstroDescription = document.getElementById('hotelDescription2');
  elAstroDescription.textContent = astroDescription;

  // populates if hotel is fully booked or available to book
  var astroAvailability = astroHotel.checkAvailability();
  var elAstroAvailability = document.getElementById('roomAvailability2');
  elAstroAvailability = astroAvailability;

  // populates room service availability
  var astroRoomService = 'Room Service: ' + astroHotel.roomService;
  var elAstroRoomService = document.getElementById('roomService2');
  elAstroRoomService.textContent = astroRoomService;

  // populates gym availability
  var astroGym = 'Gym: ' + astroHotel.gym;
  var elAstroGym = document.getElementById('gym2');
  elAstroGym.textContent = astroGym;

  // populates valet availability
  var astroValet = 'Valet: ' + astroHotel.valet;
  var elAstroValet = document.getElementById('valet2');
  elAstroValet.textContent = astroValet;

  // populates wifi availability
  var astroWifi = 'Wifi: ' + astroHotel.wifi;
  var elAstroWifi = document.getElementById('wifi2');
  elAstroWifi.textContent = astroWifi;

  // populates pool availability
  var astroPool = 'Pool: ' + astroHotel.pool;
  var elAstroPool = document.getElementById('pool2');
  elAstroPool.textContent = astroPool;
  


// new hotel created
var athleticHotel = new Hotel(
  'Athletics',
  'Oakland, CA',
  'A Bay Area must stay hotel',
  115, 
  40, 
  true, 
  true, 
  true, 
  false, 
  false);


// new hotel created
var rangerHotel = new Hotel(
  'Rangers',
  'Arlington, TX',
  'Across from Jerry World is the Ranger Hotel',
  90, 
  30, 
  false, 
  false, 
  false, 
  true, 
  false);


///////////////////////////////////////////////////////////
// modal js for hotel description
  // Get the modal
var modal = document.querySelectorAll('#myModal');
// Get the button that opens the modal
var btn = document.querySelectorAll('#marinerDetails', '#astroDetails', '#athleticDetails', '#rangerDetails');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
///////////////////////////////////////////////////////////


