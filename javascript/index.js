function updateTime() {
	//  Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
		let losAngelesDateElement = losAngelesElement.querySelector(".date");
		let losAngelesTimeElement = losAngelesElement.querySelector(".time");

		let losAngelesTime = moment().tz("America/Los_Angeles");

		losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
		losAngelesTimeElement.innerHTML = losAngelesTime.format(
			"hh:mm:ss [<small>]A[</small>]",
		);
	}
	// Paris
	let parisElement = document.querySelector("#paris");
	if (parisElement) {
		let parisDateElement = parisElement.querySelector(".date");
		let parisTimeElement = parisElement.querySelector(".time");
		let parisTime = moment().tz("Europe/Paris");

		parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
		parisTimeElement.innerHTML = parisTime.format(
			"hh:mm:ss [<small>]A[</small>]",
		);
	}
	// Dakar
	let dakarElement = document.querySelector("#dakar");
	if (dakarElement) {
		let dakarDateElement = dakarElement.querySelector(".date");
		let dakarTimeElement = dakarElement.querySelector(".time");
		let dakarTime = moment().tz("Africa/Dakar");

		dakarDateElement.innerHTML = dakarTime.format("MMMM Do YYYY");
		dakarTimeElement.innerHTML = dakarTime.format(
			"hh:mm:ss [<small>]A[</small>]",
		);
	}
}

//  City Selector

function updateCity(event) {
	let cityTimeZone = event.target.value;
	// For current location
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}

	// City name from select
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
	<a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
