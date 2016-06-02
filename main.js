function removePassengersComponent() {
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

function constructPassengers(listOfPassengers){
	console.log(listOfPassengers)
	var newDivPass
		{
			newDivPass = document.createElement("div")
			newDivPass.id = "passengers"	
			newDivPass.innerHTML = 'Passenger Name'
		}
	var newDivBook
		{
			newDivBook = document.createElement("div")
			newDivBook.id = "booking"	
			newDivBook.innerHTML = 'Booking Number'
		}

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
		
		document.body.appendChild(newDivPass)
		document.body.appendChild(newDivBook)
		document.getElementById("passengers").appendChild(newPassDiv)
		document.getElementById("booking").appendChild(newBookDiv)
	})
}

function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersComponent()
	constructPassengers(listOfFlights[idPassenger.id].passengers)
}