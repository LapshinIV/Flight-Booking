var _ = require('underscore');
var listOfFlights = require('./db.js');


function removePassengersAndBookingComponent() {
  var passengers = document.getElementById('passengersName');
  var booking = document.getElementById('bookingNumber')
  passengers.parentNode.removeChild(passengers);
  booking.parentNode.removeChild(booking);

};


function showFlightNumber(parentFlights){
	var appendFlightNumbers = _.map(_.keys(listOfFlights), function(flightNumber){  //render in html
		var newFlightNumberDiv;
		  {
			newFlightNumberDiv = document.createElement('div')
		    newFlightNumberDiv.id = flightNumber				
		    newFlightNumberDiv.innerHTML = flightNumber
		    newFlightNumberDiv.className = "colortext"
			newFlightNumberDiv.onclick = function(){return onFlightClick(this)}
	      }
	    parentFlights.appendChild(newFlightNumberDiv) 
	})
};


function createHeaderElementsOfPassenger(PositionContainer){										
	var newHeaderPassenger
		{
			newDivPassenger = document.createElement("div")
			newDivPassenger.id = "passengersName"
			newDivPassenger.innerHTML = "Passenger Name"	
		}
	PositionContainer.appendChild(newDivPassenger)
}



function createHeaderElementsOfBooking(PositionContainer){										
	var newHeaderBooking
		{
			newDivBooking = document.createElement("div")
			newDivBooking.id = "bookingNumber"
			newDivBooking.innerHTML = "Booking Number"	
		}
	PositionContainer.appendChild(newDivBooking)
}




function showPassengers(listOfPassengers, idPassengerName){										
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.id = "passengers"
			newPassDiv.innerHTML = passengers.name
		}
		idPassengerName.appendChild(newPassDiv)
	})
};





function showBooking(listOfPassengers, idBookingNumber){										
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newBookDiv
		{
			newBookDiv = document.createElement("div")
			newBookDiv.id = "booking"
			newBookDiv.innerHTML = passengers.booking
		}
		idBookingNumber.appendChild(newBookDiv)
	})
};





function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersAndBookingComponent()
	createHeaderElementsOfPassenger(container);
	createHeaderElementsOfBooking(container);
	showPassengers(listOfFlights[idPassenger.id].passengers, document.getElementById("passengersName"))
	showBooking(listOfFlights[idPassenger.id].passengers, document.getElementById("bookingNumber"))
};


setTimeout(function(){showFlightNumber(document.getElementById("flightsNumbers"))}, 1);