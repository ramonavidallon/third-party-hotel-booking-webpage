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
      var vacancy = document.getElementById('roomAvailability');
      vacancy.textContent = marinerAvailable;
    }
    if (roomsTotal <= roomsBooked) {
      var marinerUnavailable = 'The ' + this.name + ' do not have any rooms available';
      var noVacancy = document.getElementById('roomAvailability');
      noVacancy.textContent = marinerUnavailable;
    }
  };
}

// hotel created
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
  var elMarinerAvailability = document.getElementById('roomAvailability');
  elMarinerAvailability = marinerAvailability;





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
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('marinerDetails', 'astroDetails', 'athleticDetais', 'rangerDetails');
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


