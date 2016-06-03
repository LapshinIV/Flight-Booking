function removePassengersandBookingComponent() {
  var passengers = document.getElementById('passengersName');
  var booking = document.getElementById('bookingNumber')
  passengers.parentNode.removeChild(passengers);
  booking.parentNode.removeChild(booking);

}


function constructFlightNumber(){
	var appendFlightNumbers = _.map(_.keys(listOfFlights), function(flightNumber){  //render in html
		console.log(flightNumber)
		var newFlightNumberDiv;
		  {
			newFlightNumberDiv = document.createElement('div')
		    newFlightNumberDiv.id = flightNumber				
		    newFlightNumberDiv.innerHTML = flightNumber
			newFlightNumberDiv.onclick = function(){return onFlightClick(this)}
			document.getElementById("flightsNumbers").appendChild(newFlightNumberDiv) // по моему хрень... child in child?? стили..
	      }
	})
}


function createHeaderElementsOfTable(){
	var newHeaderPassenger
		{
			newDivPassenger = document.createElement("div")
			newDivPassenger.id = "passengersName"
			newDivPassenger.innerHTML = "Passenger Name"	
		}
	var newHeaderBooking
		{
			newDivBooking = document.createElement("div")
			newDivBooking.id = "bookingNumber"
			newDivBooking.innerHTML = "Booking Number"	
		}
	document.body.appendChild(newDivPassenger)
	document.body.appendChild(newDivBooking)
}



function constructBookingAndPassengers(listOfPassengers){
	console.log("listofPassengers:", listOfPassengers)
	var appendPassengersList = _.map(listOfPassengers, function(passengers){
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.id = "passengers"
			newPassDiv.innerHTML = passengers.name
		}
	var newBookDiv
		{
			newBookDiv = document.createElement("div")
			newBookDiv.id = "booking"
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