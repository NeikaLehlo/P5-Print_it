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

//init dotSelected number
let dotSelected = 0;

//Function for create bullet points
function generatedots(slides) {
	const dots = document.querySelector(".dots");
	document.querySelector(".dots").innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		const dotElement = document.createElement("div");
		i == dotSelected ? dotElement.setAttribute("class", "dot dot_selected") : dotElement.setAttribute("class", "dot");
		dots.appendChild(dotElement);
	}
}

//Function for update image and text of the slides
function generateSlides() {
	const baliseImage = document.querySelector(".banner-img");
	const baliseText = document.querySelector("#banner p");
	baliseImage.src = "./assets/images/slideshow/"+slides[dotSelected].image;
	baliseText.innerHTML= slides[dotSelected].tagLine;
}

//generate dots for the first time.
generatedots(slides);



//Add EventListener on the arrows with slide update
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function (){
	dotSelected --;
	dotSelected < 0 ? dotSelected=3 : null;
	generatedots(slides);
	generateSlides();
	return console.log("click arrow left " + dotSelected);
})


const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function (){
	dotSelected ++;
	dotSelected > 3 ? dotSelected=0 : null;
	generatedots(slides);
	generateSlides();
	return console.log("click arrow right " + dotSelected);
})