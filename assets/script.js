const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Add EventListener on the arrows
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function (){
	return console.log("click arrow left");
})

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function (){
	return console.log("click arrow right");
})

//Function for create bullet points
function generatedots(slides) {
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slides.length; i++) {
		const dotElement = document.createElement("div");
		i == 0 ? dotElement.setAttribute("class", "dot dot_selected") : dotElement.setAttribute("class", "dot");
		dots.appendChild(dotElement);
	}
	
}

generatedots(slides);