function removePassengersandBookingComponent() {
  var passengers = document.getElementById('passengers');
  var booking = document.getElementById('booking')
  passengers.parentNode.removeChild(passengers);
  booking.parentNode.removeChild(booking);

}

function constructFlightNumber(){
	var appendFlightNumbers = _.map(_.keys(listOfFlights), function(flightNumber){
		var newFlightNumberDiv;
		  {
			newFlightNumberDiv = document.createElement('div')
		    newFlightNumberDiv.id = flightNumber				
		    newFlightNumberDiv.innerHTML = flightNumber
			newFlightNumberDiv.onclick = function(){return onFlightClick(this)}
			document.getElementById("flights").appendChild(newFlightNumberDiv)
	      }
	})
}

function createHeaderElementsOfTable(){
	var newHeaderPassenger
		{
			newDivPassenger = document.createElement("div")
			newDivPassenger.id = "passengers"	
		}
	var newHeaderBooking
		{
			newDivBooking = document.createElement("div")
			newDivBooking.id = "booking"	
		}
	document.body.appendChild(newDivPassenger)
	document.body.appendChild(newDivBooking)
}


function constructBookingAndPassengers(listOfPassengers){
	console.log(listOfPassengers)
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
		console.log(passengers)
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.innerHTML = passengers.name
		}
	var newBookDiv
		{
			newBookDiv = document.createElement("div")
			newBookDiv.innerHTML = passengers.booking
		}
		
		document.getElementById("passengersName").appendChild(newPassDiv)
		document.getElementById("bookingNumber").appendChild(newBookDiv)
	})
}





function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersandBookingComponent()
	createHeaderElementsOfTable();
	constructBookingAndPassengers(listOfFlights[idPassenger.id].passengers)
}