// Corecion in js mainly 3 types   1)nuber  2)string  3) boolean



console.log('5'-5); //  output 5-5 = 0 both treated as number
console.log('5'+5);// output 5+5 = 55 both treated as string 

// always check the type of operator

let n = '6'
let sum=0
const type = typeof n // type check 
console.log(type);
 if (type == 'string'){
      sum= Number(n)+4
 }else sum =n+5

console.log(sum);
// ***************************************//


// Corecion with boolean

const adder = true +5  /// true here consider as liteal 1 so
console.log(adder); // output 6   ,, 1+5 = 6
const sub = false +5 /// false here consider as literal 0 so 
console.log(sub);  // output 5 ,,  0+5
 
/*******************************************/




/*values that are interperet as false :
0
"",'' / empty string ***** true if any thing present in string eg (actual space )or actuall token
null
undefined
*/
// apart from this all treated as true



//eg 
const logindetails = ' '

const loginID=logindetails[0]
if (logindetails){
    console.log('Allow user to login')  
}else {
    console.log('Auth failed')
}