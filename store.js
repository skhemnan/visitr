const store = [
				{
					main: 'Thunderstorm',
					bring: [
							'Umbrella',
							'Rain Boots',
							'A good book (if you want to stay indoors)'
					],
					activities: [
							'Visit a Coffee Shop',
							'Visit a Musem',
							'Catch a Movie',
							'Indulge in some whiskey at the nearest cozy bar'
					],
				},
				{
					main: 'Drizzle',
					bring: [
						'Rain Jacket',
						'Umbrella',
						'Waterproof shoes',
					],
					activities: [
						'Explore! The city can have a different look with some showers',
						'Race boats',
						'Go for a nature walk',
						'Take some pictures!'
					],
				},
				{
					main: 'Rain',
					bring: [
						'Rain Coat',
						'Umbrella',
						'Rain Boots'
					],
					activities: [
						'Catch a romantic movie (something about the weather makes it better)',
						'Check out the local tastes! The spicier the better',
						'Do some shopping! Not too much though.',
						'Visit a beautiful church'
					],
				},
				{
					main: 'Snow',
					bring: [
						'Snow Boots',
						'Scarf',
						'Earmuffs/Beanie',
						'Gloves'
					],
					activities: [
						'Good old fashioned snowball fight',
						'Get some diner food',
						'Do some nature exploring',
						'Christmas time? Visit a Santa Village'
					],
				},
				{
					main: 'Mist',
					bring: [
						'Hiking shoes',
						'Umbrella (You never know)'
					],
					activities: [
						'Explore nature from an elevated perspective',
						'Walk around with a cup of coffee',
						'Book some tours of famous sight seeing spots'
					]
				},
				{
					main: 'Smoke',
					bring: [
						'Shades',
						'Face Mask',
						'Scarf'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},
				{
					main: 'Haze',
					bring: [
						'Scarf',
						'Shades',
						'Face Mask'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},
				{
					main: 'Dust',
					bring: [
						'Light Jacket',
						'Shades',
						'Face Mask'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},
				{
					main: 'Fog',
					pack: [
						'Hiking shoes',
						'Umbrella (You never know)'
					],
					activities: [
						'Explore nature from an elevated perspective',
						'Walk around with a cup of coffee',
						'Book some tours of famous sight seeing spots'
					],
				},
				{
					main: 'Sand',
					bring: [
						'Scarf',
						'Shades',
						'Face Mask'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},			
				{
					main: 'Dust',
					bring: [
						'Scard',
						'Shades',
						'Face Mask'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},
				{
					main: 'Ash',
					bring: [
						'Shades',
						'Face Mask'
					],
					activities: [
						'WARNING: If you have respiratory difficulties, stay indoors!',
						'Minimal Outdoor activities. Check out some local restaurants!',
						'Stay vigilant for severe weather conditions'
					],
				},
				{
					main: 'Squall',
					bring: [
						'Scarf'
					],
					activities: [
						'WARNING: No vigorous outdoor activity',
						'Watch out for changes in weather conditions'
					],
				},
				{
					main: 'Tornado',
					bring: [
						'Shades',
						'Scarf',
						'Face Mask'
					],
					activities: [
						'WARNING: No vigorous outdoor activity',
						'Watch out for changes in weather conditions'
					],
				},
				{
					main: 'Clear',
					bring: [
						'Shades',
						'Your favorite hat',
						'Hiking Shoes'
					],
					activities: [
						'Get some of the local food and have a picnic at a local park!',
						'If it is the right temperature, visit the beach!',
						'Make sure to catch the sunset!',
						'Enjoy some good hikes in the area!'
					],
				},
				{
					main: 'Clouds',
					bring: [
						'A good book',
						'Your best camera',
					],
					activities: [
						'Take some pictures! Its the best lighting for it',
						'Your destination will never look better, make sure you see every corner!',
						'Do some cafe hopping! It will be great weather for a cup of coffee'
					],
			}
]

//Sample function
/*
function loopThrough(store){
	let user_main="Drizzle"
	for(i=0;i<store.length;i++){
		if(store[i].main == user_main){
		console.log("Here's what you should pack:");
		for(j=0;j<store[i].pack.length;j++){
				console.log(store[i].pack[j]);
			}
		}
	}
}

loopThrough(store);
*/
