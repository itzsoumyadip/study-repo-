class User {
    constructor(firstName,middleName,lastName,credit){
      
        this.firstName= firstName;
        this.lastName= lastName;
        this.credit =credit;
        this.middleName=middleName;
        console.log('parent constructor run');
        
       
    }
    getName() {                         // get the name from user
       
       return  `${this.firstName} ${this.middleName} ${this.lastName} ${this.credit}`  
        
    }
    editName(passName)    // edit the name 
    {
        let newName = passName.split(' ')   // split the string in  basis of  (' blank space') ,(;),(:),etc and return in from of array 
         this.firstName = newName[0]  
          this.subject=this.credit
         this.credit= this.lastName;
         this.lastName  = newName[2]
        this.middleName =newName[1]
        
    } 
   }
   

   class Teacher extends User    /// inheritance 
   {
    constructor(firstName,middleName,lastName,credit,subject){
        console.log('child constructur ');
        
        super(firstName,middleName,lastName,credit);
        this.subject = subject;
   }
   getName() // method overriding
   {
       
        
    return ( `${this.firstName} ${this.middleName} ${this.lastName}  ${this.credit} my teaching subject is ${this.subject}`      )
      }
   
    }


   const john = new Teacher('john','Adreanson',32,"javascript" )   // new object create of class user
   
  
 john.editName('johnny cocc andreson ')
    console.log(john.getName())    // still john.getName() because john is the object 
   
