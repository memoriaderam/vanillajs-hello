/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {

	//your loop here
    let exampleColor = getColor(1);
	//let randomNumber = Math.floor(Math.random()*10);
	for (randomNumber=0; randomNumber<=10;randomNumber++){
		let randomNumber = Math.floor(Math.random()*10);
		console.log(getColor(randomNumber));
		
	}
	return randomNumber;

	//}

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();
  console.log("Hello Rigo from the console!");
};
