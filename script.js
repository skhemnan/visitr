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
const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country }&APPID=${weather_api}&units=imperial`)
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
let activePic = '';
for(i=0;i<store.length;i++){
	if(resultMain == store[i].main){
		bring = store[i].bring;
		active = store[i].activities;
		bringPic = store[i].bringPic;
		activePic = store[i].activePic;
		}
	}
	renderBring(bring,bringPic);	
	renderActive(active,activePic);
}

function analyzeTemp(apiMax,apiMin){
	// Takes in high and low temperature, with switch statment or if/else, returns "what to pack" array
	let whatToPack= [];
	let packPic = '';
	let max = apiMax;
	let min = apiMin;
	if(max<40 || min<40){
		whatToPack = ['Parka','Overcoat','Sweaters','Thermals']
		packPic = 'https://www.bysarahward.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Flats-Styling-Patagonia-3.jpg?bwg=1537770243'
	} else if (max<70 || min<70){
		whatToPack = ['Windbreaker','Sweaters','Light Jacket']
		packPic = 'https://i.pinimg.com/474x/f7/39/62/f739626ed7c5acf4b27786a71b4ca0a2.jpg'
	} else {
		whatToPack = ['Shorts','T-Shirts','Light Button-downs']
		packPic = 'https://static1.squarespace.com/static/528f8b33e4b01f2a315145b2/5719e00c1d07c0bcdda377a7/598c95c7bebafb811d5c379c/1519999585367/shorts+flat+lay%403x.png?format=1500w'
	}
	renderPack(whatToPack,packPic);	
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

function renderPack(whatToPack,storePackPic){
// Takes in packing information and renders packing card
	let pack = whatToPack;
	let packPic =storePackPic;
	$('#pack').show();
	$('#pack').css(`background`,`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${packPic}) center center`);
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

function renderActive(storeActive,storeActivePic){
// Renders activities based on weather condition	
	let active = storeActive;
	let activePic = storeActivePic;
	$('#activities').show();
	$('#activities').css(`background`,`linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${activePic}) center center`)
	$('#activities').append('<h2>Here are some fun activities you can do: </h2>')
	$('#active-text').append(`<ul>`)
					for (i=0;i<active.length;i++){
					$('#active-text').append(`<li>${active[i]}</li>`)	
					}
					$('#active-text').append(`</ul>`);
}


$(handleSubmit());

