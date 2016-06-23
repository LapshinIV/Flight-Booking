var _ = require('underscore');
var listOfFlights = require('./db.js');


function removePassengersAndBookingComponent(getIdPassengerName, getIdBookingNumber) {
  getIdPassengerName.parentNode.removeChild(getIdPassengerName);
  getIdBookingNumber.parentNode.removeChild(getIdBookingNumber);

};

function showFlightNumber(getIdFlights){
	var appendFlightNumbers = _.map(_.keys(listOfFlights), function(flightNumber){  //render in html
		var newFlightNumberDiv;
		  {
			newFlightNumberDiv = document.createElement('div')
		    newFlightNumberDiv.id = flightNumber				
		    newFlightNumberDiv.innerHTML = flightNumber
		    newFlightNumberDiv.className = "colortext"
			newFlightNumberDiv.onclick = function(){return onFlightClick(this)}
	      }
	    getIdFlights.appendChild(newFlightNumberDiv) 
	})
};

function createHeaderElementsOfPassenger(PositionContainer){										
	var newHeaderPassenger
		{
			newHeaderPassenger = document.createElement("div")
			newHeaderPassenger.id = "passengersName"
			newHeaderPassenger.innerHTML = "Passenger Name"	
		}
	 PositionContainer.appendChild(newHeaderPassenger)
}

function createHeaderElementsOfBooking(PositionContainer){										
	var newHeaderBooking
		{
			newHeaderBooking = document.createElement("div")
			newHeaderBooking.id = "bookingNumber"
			newHeaderBooking.innerHTML = "Booking Number"	
		}
	 PositionContainer.appendChild(newHeaderBooking)
}




function showPassengers(listOfPassengers, getIdPassengerName){										
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.id = "passengers"
			newPassDiv.innerHTML = passengers.name
		}
		getIdPassengerName.appendChild(newPassDiv)
	})
};

function showBooking(listOfPassengers, getIdBookingNumber){										
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newBookDiv
		{
			newBookDiv = document.createElement("div")
			newBookDiv.id = "booking"
			newBookDiv.innerHTML = passengers.booking
		}
		getIdBookingNumber.appendChild(newBookDiv)
	})
};

function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersAndBookingComponent(document.getElementById('passengersName'), document.getElementById('bookingNumber'))
	createHeaderElementsOfPassenger(container);
	createHeaderElementsOfBooking(container);
	showPassengers(listOfFlights[idPassenger.id].passengers, document.getElementById("passengersName"))
	showBooking(listOfFlights[idPassenger.id].passengers, document.getElementById("bookingNumber"))
};


setTimeout(function(){showFlightNumber(document.getElementById("flightsNumbers"))}, 1);