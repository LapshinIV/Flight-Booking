function removePassengersComponent() {
  var el = document.getElementById('passengers');
  el.parentNode.removeChild(el);
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
	var newDiv
		{
			newDiv = document.createElement("div")
			newDiv.id = "passengers"	
			newDiv.innerHTML = 'Passenger Name'+" "+'Booking Number'
		}

	var appendPassengersList = _.map(listOfPassengers, function(passengers){
		console.log(passengers)
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.innerHTML = passengers.name+" "+passengers.booking
		}
		
		document.body.appendChild(newDiv)
		document.getElementById("passengers").appendChild(newPassDiv)
	})
}

function onFlightClick(idPassenger){
	console.log(idPassenger.innerHTML)
	removePassengersComponent()
	constructPassengers(listOfFlights[idPassenger.id].passengers)
}