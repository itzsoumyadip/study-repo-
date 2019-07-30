 var ul = document.getElementById('list');
 var li;


 // for adding
 var addButton = document.getElementById('add');
 addButton.addEventListener('click', addItem);


 //for removing
 var removeButton = document.getElementById('remove')
 removeButton.addEventListener('click', removeItem)



 function addItem() {

   inputRemove(); // call the fuction to  remove the paragraph  ->>> because without it the new paragrph(Please enter a valid input ) will be added every time in front ot input area ...


   console.log(add);


   var input = document.getElementById('input') // user enter data 
   var item = input.value; // user input value is stotre in item
   ul = document.getElementById('list')
   var textnode = document.createTextNode(item)

   if (item === '') {
     /* * this  part is for user if they does not enter any input  and click add button */

     var npara = document.createElement("p")
     // npara.textContent=
     var node = document.createTextNode('*Please Enter Your ToDo List Input');
     npara.appendChild(node)

     // var element =document.getElementsByClassName('controls')

     /*  THIS WILL ADD THE PARAGRAPH('*Please Enter Your ToDo List Input') BEFORE INPUT AREA */
     var child = document.getElementById('input')
     var element = child.parentNode; ///  .parentNode  ,, returns ==>A Node object, representing the parent node of a node, or null if the node has no parent
     element.insertBefore(npara, child)     ///   (new thing that to insert , before where to insert )




   } else {

     /* *** this part will add the  usre input to new and create new checkbok */

     //create li
     li = document.createElement('li');

     //create checkbox
     var checkbox = document.createElement('input')
     checkbox.type = 'checkbox';
     checkbox.setAttribute('id', 'check')

     //create lable

     var label = document.createElement('label')
     label.setAttribute('for', 'item') // optional


     // add these element on web page

     ul.appendChild(label) //
     li.appendChild(checkbox) // checkbo
     label.appendChild(textnode)
     li.appendChild(label)
     ul.insertBefore(li, ul.childNodes[0]); // insertBefore()  ==?  what is the child  we want add ==>>li..... and where u want to add ==>>ul.childNode


     setTimeout(() => {
       li.className = 'visual';
     }, 150)



     input.value = ''; // remove the written input form input box after click AddTodo
   }
 }





 function removeItem() {
   console.log('delete button');


   li = ul.children // return array of child element of ul
   for (let index = 0; index < li.length; index++) {
     const element = li[index];
     while (li[index] && li[index].children[0].checked) /// check index itself   means===>>> it should be on the present index and as well as checked insde on that  
     {

       ul.removeChild(li[index])
     }
   }
 }
 // remove the paragraph 
 function inputRemove() {
   const mye = document.querySelectorAll('p')
   mye.forEach((p) => {
     p.textContent = ''

   });


 }
 /* ADD DATAE AND REMOVE DATE */
 function effect() {
   var d = new Date();
   document.getElementById("nw").innerHTML = d;
   var nw1 = document.getElementById("nw");
   nw1.style.fontSize = "15px";
   //nw1.style.backgroundColor="red"
 }

 function back() {
   const myE = document.getElementById("nw");
   myE.textContent = "MY Todo";
   //  var nw1 =document.getElementById("nw");
   myE.style.fontSize = '29px';
   myE.style.backgroundColor = "rgb(229, 235, 234)"
 }