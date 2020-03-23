const weather_api='977ddd93efd478dcca2648525edc91c1';

function handleSubmit(){
// On form submit, call API call function
$('.card').hide();
$('#submit').on('click', function(event) {
	let city = $('#city').val();
	let country=$('#country').val();
	if (!city || !country){
		alert("You must fill both fields!");
	}else{
	$('.image_wrapper').toggleClass("image_wrapper_top","image_wrapper");
	$('.plane_center').toggleClass("plane_top","plane_center");
	$('.form').remove();
	getWeather(city,country);	
	}
});
}

async function getWeather(city,country){
// API Call, returns json with weather information, return main/description
const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country }&APPID=${weather_api}&units=imperial`)
const result = await apiCall.json();
const main = result.weather[0].main;
const temp = result.main.temp;
const min = result.main.temp_min;
const max = result.main.temp_max;
console.log(result);
renderTemp(temp,max,min,main)
analyzeTemp(max,min)
analyzeCondition(main);
}

function analyzeCondition(resultMain){
// loops through STORE.js, looks for main/description there, once found, break, return object and values
let pack = [];
let active = [];
for(i=0;i<store.length;i++){
	if(resultMain == store[i].main){
		bring = store[i].bring;
		active = store[i].activities;
		}
	}
	renderBring(bring);	
	renderActive(active);
}

function analyzeTemp(apiMax,apiMin){
	// Takes in high and low temperature, with switch statment or if/else, returns "what to pack" array
	let whatToPack= [];
	let max = apiMax;
	let min = apiMin;
	if(max<40 || min<40){
		whatToPack = ['Parka','Overcoat','Sweaters','Thermals']
	} else if (max<70 || min<70){
		whatToPack = ['Windbreaker','Sweaters','Light Jacket']
	} else {
		whatToPack = ['Shorts','T-Shirts','Light Button-downs']
	}
	renderPack(whatToPack);	
}

function renderTemp(apiTemp,apiMax,apiMin,apiMain){
// Takes in temperature information and renders temperature card
		let temp = Math.ceil(apiTemp);
		let max = Math.ceil(apiMax);
		let min = Math.ceil(apiMin);
		let main = apiMain;
		$('#temp').show();
		$('#temp').css("background","url(https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80)")
		$('#temp-text').append(`
				<h1 class=temperature>${temp}</h1>
				<p>High: ${max} Low: ${min}</p>
				<p>Conditions: ${main}<p>	
				`);	
}

function renderPack(whatToPack){
// Takes in packing information and renders packing card
	let pack = whatToPack
	$('#pack').show();
	$('#pack').css("background","url(https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center center");
	$('#pack-text').append(`
					<h3>Here is what you should pack: </h3>
					<ul>`)
					for (i=0;i<pack.length;i++){
					$('#pack-text').append(`<li>${pack[i]}</li>`)	
					}
					$('#pack-text').append(`</ul>`);
}

function renderBring(storeBring){
// Renders what you should bring given a weather condition
	let bring = storeBring;
	$('#bring').show();
	$('#bring').css("background","url(https://images.unsplash.com/photo-1519576122146-ccfda6b8693f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center");
	$('#bring-text').append(`
					<h3>Here is what you should bring: </h3>
					<ul>`)
					for (i=0;i<bring.length;i++){
					$('#bring-text').append(`<li>${bring[i]}</li>`)	
					}
					$('#bring-text').append(`</ul>`);
}

function renderActive(storeActive){
// Renders activities based on weather condition	
	let active = storeActive;
	$('#activities').show();
	$('#activities').css("background","url(https://images.unsplash.com/photo-1522849811436-5e4917aefca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80) center center")
	$('#active-text').append(`
					<h3>Here are some fun activities you can do: </h3>
					<ul>`)
					for (i=0;i<active.length;i++){
					$('#active-text').append(`<li>${active[i]}</li>`)	
					}
					$('#active-text').append(`</ul>`);
}


$(handleSubmit());

