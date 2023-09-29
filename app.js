// Global variables
var btnOne = document.getElementById("btnOne");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree");
var dieDiv = document.getElementById("dieDiv");
var diceVal = [];
var Die = /** @class */ (function () {
    function Die() {
        this.div = document.createElement("div");
        this.divStyle();
        this.roll();
        diceVal.push(this);
        if (dieDiv) {
            dieDiv.appendChild(this.div);
        }
    }
    Die.prototype.divStyle = function () {
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
    };
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6 + 1);
        if (this.div) {
            this.div.textContent = this.value.toString();
        }
    };
    return Die;
}());
if (btnOne) {
    btnOne.addEventListener("click", function () {
        new Die();
        // console.log("Generate Die");
    });
}
if (btnTwo) {
    btnTwo.addEventListener("click", function () {
        for (var i = 0; i < diceVal.length; i++) {
            diceVal[i].roll();
        }
        // console.log("Roll Dice");
    });
}
if (btnThree) {
    btnThree.addEventListener("click", function () {
        var sum = 0;
        for (var i = 0; i < diceVal.length; i++) {
            sum += diceVal[i].value;
        }
        alert("The sum of the dice is ".concat(sum));
    });
}
