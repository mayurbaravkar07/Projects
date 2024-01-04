//let x = document.querySelectorAll('#heading');
//console.log(x);


// var tag =document.createElement('h2');
// var body=document.getElementsByTagName('body')[0];
// tag.innerHTML="This is the heading 2"

// body.append(tag);


//fUNCTION FOR CANGINTHE COLOR DYNAMICALLY 

function changeCss(){
    let head=document.getElementsByTagName('head')[0];

// Select the current link css tag
let linkTag =document.getElementById('css');
//remove ths css link tag
head.removeChild(linkTag);
//create the new link tag
let newLink=document.createElement('link');
//add the new href
newLink.setAttribute('id','cssNew',)
newLink.setAttribute('rel','stylesheet',)
newLink.setAttribute('href','newCss.css',)
//appen it to the end
head.appendChild(newLink);

}