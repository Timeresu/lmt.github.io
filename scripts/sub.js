const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

document.querySelector("html").addEventListener("click",
	() => {
		alert("Ouch! Stop poking me!");
	}
)