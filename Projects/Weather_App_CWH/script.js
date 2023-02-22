
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2fc4d8614msha00d3e6855d3f7ap12fb9fjsnf2034e09a17e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

submit_btn.addEventListener('click', (e) => {
	e.preventDefault();
	getInfo(search_box.value);
});



const getInfo = (city_name) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city_name, options)
		.then(response => response.json())
		.then(response => {

			console.log(response);
			city.innerHTML = city_name;
			cloud_pct.innerHTML = response.cloud_pct ;
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
		
		})
		.catch(err => console.error(err));
}

// getInfo("Delhi")

