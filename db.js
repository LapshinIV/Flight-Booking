var listOfFlights = {
	"AB1322":{
		flightNumber: "AB1322", 
		passengers: [ 
				{
					"name":     "Dmitry Kouznetsov",
					"booking":  "ABCDEF"
				},
				{
					"name":     "Natalia Shteinikova", 
					"booking":  "ABCDEF"
				}, 
		] 
	}, 
	"CD224":{ 
		flightNumber: "CD224",
		passengers: [ 
				{
					"name":     "Alex Emshanov",
					"booking":  "ADADADAD"
				},
				{
					"name":     "Alexandra Emshanova",
					"booking":  "ADADADAD"
				},
			 {
					"name":     "Avrora Emshanova",
					"booking":  "ADADADAD"
				},
		] 
	}, 
	"QR335":{ 
		flightNumber: "QR335", 
		passengers: [ 
				{
					"name":     "Ivan Lapshin",
					"booking":  "QWERT"
				},
				{
					"name":     "Macaw Macaw",
					"booking":  "QWERT"
				},
				{
					"name": "Macaw1 Macaw1",
					"booking":  "QWERT"
				},
		] 
	},
	"BB554":{ 
		flightNumber: "BB554", 
		passengers: [ 
				{
					"name":     "Parrot",
					"booking":  "TYY"
				},
				{
					"name":     "Monkey",
					"booking":  "TYY"
				},
				{
					"name": "Piton",
					"booking":  "TYY"
				},
				{
					"name": "Elephan",
					"booking":  "TYY"
				},
		] 
	}  
}

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
			newFlightNumberDiv.onclick = function(){onFlightClick(this)}
			document.getElementById("flights").appendChild(newFlightNumberDiv)
	      }
	})
}

function constructPassengers(listOfPassengers){
	var newDiv
		{
			newDiv = document.createElement("div")
			newDiv.id = "passengers"	
			newDiv.innerHTML = 'Passenger Name'+" "+'Booking Number'
		}

	_.map(listOfPassengers, function(passengers){
	var newPassDiv
		{
			newPassDiv = document.createElement("div")
			newPassDiv.innerHTML = passengers.name+" "+passengers.booking
		}
		
		document.body.appendChild(newDiv)
		document.getElementById("passengers").appendChild(newPassDiv)
	})
}

function onFlightClick(listOfPassengers){
	console.log(listOfPassengers.innerHTML)
	removePassengersComponent()
	constructPassengers(listOfFlights[listOfPassengers.id].passengers)
}