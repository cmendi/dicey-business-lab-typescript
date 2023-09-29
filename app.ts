// Global variables
const btnOne: HTMLElement | null = document.getElementById("btnOne");
const btnTwo: HTMLElement | null = document.getElementById("btnTwo");
const btnThree: HTMLElement | null = document.getElementById("btnThree");
const dieDiv: HTMLElement | null = document.getElementById("dieDiv");
let diceVal: Die[] = [];

class Die {
	div: HTMLDivElement;
	value: number;

	constructor() {
		this.div = document.createElement("div");
		this.divStyle();
		this.roll();
		diceVal.push(this);
		if (dieDiv) {
			dieDiv.appendChild(this.div);
		}
	}

	divStyle() {
		this.div.style.height = "150px";
		this.div.style.width = "150px";
		this.div.style.border = "4px solid black";
		this.div.style.borderRadius = "15px";
		this.div.style.margin = "20px";
		this.div.style.cursor = "pointer";
		this.div.style.display = "flex";
		this.div.style.alignItems = "center";
		this.div.style.justifyContent = "center";
		this.div.style.fontSize = "70px";
	}

	roll() {
		this.value = Math.floor(Math.random() * 6 + 1);
		if (this.div) {
			this.div.textContent = this.value.toString();
		}
	}
}

if (btnOne) {
	btnOne.addEventListener("click", () => {
		new Die();
		// console.log("Generate Die");
	});
}

if (btnTwo) {
	btnTwo.addEventListener("click", () => {
		for (let i = 0; i < diceVal.length; i++) {
			diceVal[i].roll();
		}
		// console.log("Roll Dice");
	});
}

if (btnThree) {
	btnThree.addEventListener("click", () => {
		let sum = 0;
		for (let i = 0; i < diceVal.length; i++) {
			sum += diceVal[i].value;
		}
		alert(`The sum of the dice is ${sum}`);
	});
}
