class User {
 constructor(firstName,middleName,lastName,credit){
     this.firstName= firstName;
     this.lastName= lastName;
     this.credit =credit;
     this.middleName=middleName;

 }
 getName() {                         // get the name from user
    
    return  `${this.firstName} ${this.middleName} ${this.lastName} ${this.credit}`  
     
 }
 editName(passName)    // edit the name 
 {
     let newName = passName.split(' ')   // split the string in  basis of  (' blank space') ,(;),(:),etc and return in from of array 
      this.firstName = newName[0]  
      this.credit= this.lastName;
      this.lastName  = newName[2]
     this.middleName =newName[1]
     
     
 } 
}

const john = new User('john','Adreanson',34)   // new object create of class user
//const sammy =new User()

console.log(john.getName());
john.editName('johnny cocc andreson ')
console.log(john.getName())    // still john.getName() because john is the object 



let sammy = new User() // another new class created