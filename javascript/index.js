function updateTime() {
	let martiniqueElement = document.querySelector("#martinique");
	if (martiniqueElement) {
		let martiniqueDateElement = martiniqueElement.querySelector(".date");
		let martiniqueTimeElement = martiniqueElement.querySelector(".time");

		let martiniqueTime = moment().tz("America/Martinique");

		martiniqueDateElement.innerHTML = martiniqueTime.format("ddd, D MMM");
		martiniqueTimeElement.innerHTML = martiniqueTime.format(
			"hh:mm:ss[<small>]A[</small>]",
		);
	}

	let viennaElement = document.querySelector("#vienna");
	if (viennaElement) {
		let viennaDateElement = viennaElement.querySelector(".date");
		let viennaTimeElement = viennaElement.querySelector(".time");
		let viennaTime = moment().tz("Europe/Vienna");

		viennaDateElement.innerHTML = viennaTime.format("ddd, D MMM");
		viennaTimeElement.innerHTML = viennaTime.format(
			"hh:mm:ss[<small>]A[</small>]",
		);
	}

	let bahrainElement = document.querySelector("#bahrain");
	if (bahrainElement) {
		let bahrainDateElement = bahrainElement.querySelector(".date");
		let bahrainTimeElement = bahrainElement.querySelector(".time");
		let bahrainTime = moment().tz("Asia/Bahrain");

		bahrainDateElement.innerHTML = bahrainTime.format("ddd, D MMM");
		bahrainTimeElement.innerHTML = bahrainTime.format(
			"hh:mm:ss[<small>]A[</small>]",
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
    <div class="date">${cityTime.format("ddd, D MMM")}</div>
    <h2>${cityName}</h2>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
	<a href="/">
  <img 
    src="img/back.png" 
    alt="Go back"
    class="go-back-icon"
    href="/"
  >
</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
