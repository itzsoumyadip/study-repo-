userEmail = 'abc@mail.com'
password = '734ab183abc'

function UNCheckr(UName) {       ///  username checker
       if((UName.includes('@'))&& (UName.includes('.com') )&& (UName.length>2)) {
          return true
        
         }
       return  false    
}

function PCheckr(pass) {            ///////////// user password checker
    if((pass.includes('abc'))&& (pass.length>8) ) {
       return true
     
      }
    return  false    
}


console.log(UNCheckr(userEmail))
console.log(PCheckr(password))