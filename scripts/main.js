let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//Change image when image is clicked.
myImage.onclick = function (){
	let mySrc = myImage.getAttribute("src");
	if( mySrc === "images/grammar-structure.jpg"){
		myImage.setAttribute("src","images/british-american.jpg");
	}
	else {
		myImage.setAttribute("src","images/grammar-structure.jpg");
	}
}

// Get and storage user in local storage.
function setUserName(){
	let myName = prompt("Please enter your name: ");
	if (!myName) {
		setUserName();
	}
	else{
		localStorage.setItem("name", myName);
		myHeading.textContent = "Mozzila is cool, " + myName;
	}
}

//Display stored name or check to get a new name.
if (!localStorage.getItem("name")) { //get and check the "name" from local storage.
		setUserName();
	}
else{
		let storedName = localStorage.getItem("name");
		myHeading.textContent = "Mozzila is cool, " + storedName;
	}
	
//Link button to its function when clicked, add event handle to button
myButton.onclick = function () {
	setUserName();
}