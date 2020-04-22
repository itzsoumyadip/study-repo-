//constructor function



function HouseKeeper (yearsOfExperience , name, cleaningRepertoire){
  this.yearsOfExperience=yearsOfExperience
  this.name=name
  this.cleaningRepertoire=cleaningRepertoire
  this.clean= function(){
    alert("Clean in progress")
  }

}

var hos1=new HouseKeeper(12,"james",["bathroom","bedroom"])
hos1.clean()