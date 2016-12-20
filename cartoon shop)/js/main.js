var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {


	$scope.data = [
	{
		name: "Boots",
		age: 3,
		description: "Boots is a monkey who Dora met one day in the forest, is her best friend. He is friendly and enthusiastic, and usually wears his beloved red boots, hence his name. He is light blue with a yellow stomach and yellow tipped tail. His parents look similar, with variations in eyes, height, clothing, and fur. Boots is present with Dora on most of her adventures, and he helps Dora to solve clues and puzzles. He also loves baseball and is on a team with Dora.",
		stars: 10.0,
		photo: "images/pets/Boots.png"		
	},

	{
		name: "Mushu",
		age: 2000,
		description: "Mushu was once a guardian spirit of the Fa family, but he had been demoted to the humiliating position of an incense burner and gong-ringer for the deceased Fa ancestors ever since he failed to protect a family member, a soldier named Fa Deng, resulting in the soldier's demise by decapitation (he's seen carrying his own head as a spirit). Mushu's reputation would suffer dearly from this, with the eldest ancestor refusing to even acknowledge Mushu as a 'real dragon', evoking a bitter and eager-to-please side to his personality.",
		stars: 8.5,
		photo: "images/pets/Mushu.png"		
	},

	{
		name: "Meeko",
		age: 8,
		description: "Meeko is a raccoon and one of Pocahontas' animal friends. He is sly, very greedy and loves to steal from anybody. He is usually seen with either Flit or Percy. Pocahontas wants Meeko to stay out of trouble, but this clever raccoon can't resist a tempting treat.",
		stars: 8.9,
		photo: "images/pets/Meeko.jpg"		
	},

	{
		name: "Toothless",
		age: 500,
		description: "Toothless is classified as a Night Fury dragon, which is considered to be one of the most mysterious and fearsome types of Dragons that exist. Until Hiccup discovered Toothless, no one had ever known what a Night Fury even looked like. ",
		stars: 9.5,
		photo: "images/pets/Toothless.jpg"		
	},

	{
		name: "Balto",
		age: 28,
		description: "Balto is a wolfdog who got separated from his mother when he was young and was found and raised by Boris, the Russian snow goose. Balto is very strong and handsome, but unkept. He resembles a wolf more than a dog. He has brownish-gray fur and light brown eyes. He has large paws which he attributes to his wolf heritage. Strong and outgoing, Balto is smart and trustworthy, and cares deeply for others, willing to give up his own life to help others. Also, when it comes to a relationship, kind of shy.",
		stars: 8.3,
		photo: "images/pets/Balto.jpg"		
	},

	{
		name: "Pumbaa",
		age: 20,
		description: "Pumbaa is a loving, open-hearted warthog who sometimes displays childlike naivety and innocence that is sometimes confused for stupidity. Though Timon would say otherwise, Pumbaa is actually the true brains of the outfit, having both common sense and impressive knowledge over things from nature to science.",
		stars: 8.1,
		photo: "images/pets/Pumbaa.jpg"		
	},

	{
		name: "Donkey",
		age: 24,
		description: "Donkey is a euphoric and talkative Shrek's friend, who also has a sweet tooth. He is really positive character. He's always looking at the bright side of everything, trying to work it out. A happy-go-lucky donkey.",
		stars: 7.4,
		photo: "images/pets/Donkey.jpg"		
	}

	]


	$scope.ordered = function() {
		alert( 'It will be good friend to you!');
	}


$scope.photoes = [
	{
		id: 1,
		info: "Dora",
		photo: "images/together/Dora.jpg",
		description: "Have fun together!"

	},

	{
		id: 2,
		info: "Hiccup",
		photo: "images/together/Hiccup.jpg",
		description: "Always with you"

	},

	{
		id: 3,
		info: "Mulan",
		photo: "images/together/Mulan.jpg",
		description: "Cheer up you"

	},

	{
		id: 4,
		info: "Pocahontas",
		photo: "images/together/Pocahontas.jpg",
		description: ""

	},

	{
		id: 5,
		info: "Shrek",
		photo: "images/together/Shrek.jpg",
		description: 0

	}


]


});

