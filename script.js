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
// API Call, returns json with weather information, return main/description, joins with store information, passes on to further analyze and render
const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country }&APPID=${weather_api}&units=imperial`)
const result = await apiCall.json();
const main = result.weather[0].main;
const temp = result.main.temp;
const min = result.main.temp_min;
const max = result.main.temp_max;
let mainPic = '';
for(i=0;i<store.length;i++){
	if(main == store[i].main){
		mainPic = store[i].mainPic;	
	}
	}
renderTemp(temp,max,min,main,mainPic)
analyzeTemp(max,min)
analyzeCondition(main);
}

function analyzeCondition(resultMain){
// loops through STORE.js, looks for main/description there, once found, break, return object and values
let pack = [];
let active = [];
let bringPic = '';
for(i=0;i<store.length;i++){
	if(resultMain == store[i].main){
		bring = store[i].bring;
		active = store[i].activities;
		bringPic = store[i].bringPic;
		}
	}
	renderBring(bring,bringPic);	
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

function renderTemp(apiTemp,apiMax,apiMin,apiMain,apiMainPic){
// Takes in temperature information and renders temperature card
		let temp = Math.ceil(apiTemp);
		let max = Math.ceil(apiMax);
		let min = Math.ceil(apiMin);
		let main = apiMain;
		let mainPic = apiMainPic;
		$('#temp').show();
		$('#temp').css(`background`,`linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ),url(${mainPic}) center center`)
		$('#temp').append(`<h1 class=temperature>${temp}<span>&#176;</span></h1>`)
		$('#temp-text').append(`
				<p>High: ${max}<span>&#176;</span> Low: ${min}<span>&#176;</span></p>
				<p>Conditions: ${main}<p>	
				`);	
}

function renderPack(whatToPack){
// Takes in packing information and renders packing card
	let pack = whatToPack
	$('#pack').show();
	$('#pack').css("background","linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center center");
	$('#pack').append('<h2>Here is what you should pack: </h2>')
	$('#pack-text').append(`<ul>`)
					for (i=0;i<pack.length;i++){
					$('#pack-text').append(`<li>${pack[i]}</li>`)	
					}
					$('#pack-text').append(`</ul>`);
}

function renderBring(storeBring,storeBringPic){
// Renders what you should bring given a weather condition
	let bring = storeBring;
	let bringPic = storeBringPic;
	$('#bring').show();
	$('#bring').css(`background`,`linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ),url(${bringPic}) no-repeat center center`);
	$('#bring').append('<h2>Here is what you should bring: </h2>')
	$('#bring-text').append(`<ul>`)
					for (i=0;i<bring.length;i++){
					$('#bring-text').append(`<li>${bring[i]}</li>`)	
					}
					$('#bring-text').append(`</ul>`);
}

function renderActive(storeActive){
// Renders activities based on weather condition	
	let active = storeActive;
	$('#activities').show();
	$('#activities').css("background","linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ),url(https://images.unsplash.com/photo-1522849811436-5e4917aefca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80) center center")
	$('#activities').append('<h2>Here are some fun activities you can do: </h2>')
	$('#active-text').append(`<ul>`)
					for (i=0;i<active.length;i++){
					$('#active-text').append(`<li>${active[i]}</li>`)	
					}
					$('#active-text').append(`</ul>`);
}


$(handleSubmit());

