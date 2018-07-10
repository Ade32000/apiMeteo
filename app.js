$.get("https://www.prevision-meteo.ch/services/json/Toulouse", function(meteo) 
{
	var temperature = meteo.current_condition.tmp;
	var humidite = meteo.current_condition.humidity;
	var wind = meteo.current_condition.wnd_spd;
	var ImageUrl = meteo.current_condition.icon;
	var lever = meteo.city_info.sunrise;

	$('#auch').append('<p>'+temperature+'</p>');
	console.log(temperature);
});

