function calculate (w , h)
{
    let bmi = w / (h*h)
    return bmi
}

let w = 80
let h = 5
let bmi = calculate(w , h)

console.log("Your BMI is " + bmi + " kg/m2")