var _ = require('underscore');
var db = require('./db.js');


function removePassengersAndBookingComponent() {
  var passengers = document.getElementById('passengersName');
  var booking = document.getElementById('bookingNumber')
  passengers.parentNode.removeChild(passengers);
  booking.parentNode.removeChild(booking);

};


function showFlightNumber(parent){
	var appendFlightNumbers = _.map(_.keys(listOfFlights), function(flightNumber){  //render in html
		console.log(flightNumber)
		var newFlightNumberDiv;
		  {
			newFlightNumberDiv = document.createElement('div')
		    newFlightNumberDiv.id = flightNumber				
		    newFlightNumberDiv.innerHTML = flightNumber
		    newFlightNumberDiv.className = "colortext"
			newFlightNumberDiv.onclick = function(){return onFlightClick(this)}
	      }
	    parent.appendChild(newFlightNumberDiv) 
	})
};


function createHeaderElementsOfPassenger(){
	var newHeaderPassenger
		{
			newDivPassenger = document.createElement("div")
			newDivPassenger.id = "passengersName"
			newDivPassenger.innerHTML = "Passenger Name"	
		}
	container.appendChild(newDivPassenger)
}



function createHeaderElementsOfBooking(){
	var newHeaderBooking
		{
			newDivBooking = document.createElement("div")
			newDivBooking.id = "bookingNumber"
			newDivBooking.innerHTML = "Booking Number"	
		}
	container.appendChild(newDivBooking)
}




function showPassengers(listOfPassengers){
	console.log("listofPassengers:", listOfPassengers)
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.id = "passengers"
			newPassDiv.innerHTML = passengers.name
		}
		document.getElementById("passengersName").appendChild(newPassDiv)
	})
};





function showBooking(listOfPassengers){
	console.log("listofPassengers:", listOfPassengers)
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newBookDiv
		{
			newBookDiv = document.createElement("div")
			newBookDiv.id = "booking"
			newBookDiv.innerHTML = passengers.booking
		}
		document.getElementById("bookingNumber").appendChild(newBookDiv)
	})
};





function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersAndBookingComponent()
	createHeaderElementsOfPassenger();
	createHeaderElementsOfBooking();
	showPassengers(listOfFlights[idPassenger.id].passengers)
	showBooking(listOfFlights[idPassenger.id].passengers)
};


setTimeout(function(){showFlightNumber(document.getElementById("flightsNumbers"))}, 1);