function bmiCalculator(w,h){
    let bmi
    bmi=Math.round(w/(Math.pow(h,2)))
    return bmi;
    
}

var bmi = bmiCalculator(60,1.81)
console.log(bmi)