var num = 435
var reverse=0

while (num!==0){
     
    reverse= reverse*10
    reverse=reverse+num%10
    reverse=Math.floor(reverse)
    num = num / 10;
    num =Math.floor(num)
 }

console.log(reverse);