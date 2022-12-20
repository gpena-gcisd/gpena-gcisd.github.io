let elA = document.getElementById("a");
let elB = document.getElementById("b");
let elC = document.getElementById("c");
let elX = document.getElementById("x");

let elCalculate = document.getElementById("calculate");


elCalculate.onclick = function(){
    let a = elA.value;
    let b = elB.value;
    let c = elC.value;

    let x1 = null;
    let x2 = null;

    // uh oh
    if (a == 0) {
        alert("Error: 'a' cannot be 0!");
        return
    }

    // first find the discriminant to find out what kind of answer this will be
    let discriminant = b ** 2 - 4 * a * c;
    
    let sign = Math.sign(discriminant)

    if (sign == 1) {
        // just finish the formula with the two different posibilities where the square root is positive or negative 
        let squareRoot = Math.sqrt(discriminant);

        x1 = (-b + squareRoot) / (2 * a);
        x2 = (-b - squareRoot) / (2 * a);

        elX.value = x1.toFixed(2) + " or " + x2.toFixed(2);
    } else if (sign == 0) {
        // lol
        x1 = (-b) / (2 * a);

        elX.value = x1.toFixed(2);
    } else if (sign == -1) {
        // this is where the fun begins

        // make the discriminant positive because we obviously can't sqrt an actual negative number
        positiveDiscriminant = Math.abs(discriminant);
        
        // split the fraction in two to make it easier to digest into a complex number
        // just slap an i at the end of the imaginary number and call it a day
        x1 = (-b / (2 * a)).toFixed(2) + " + " + (Math.sqrt(positiveDiscriminant) / (2 * a)).toFixed(2) + "i";
        x2 = (-b / (2 * a)).toFixed(2) + " - " + (Math.sqrt(positiveDiscriminant) / (2 * a)).toFixed(2) + "i";
        
        // easiest extra-extra credit of my life
        elX.value = x1 + " or " + x2;
    }
}
