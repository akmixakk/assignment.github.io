import data from "./input.js"

//variables to access the elements of HTML
const nav=document.querySelector("#navigation");
const myImage=document.querySelector(".imageToDisplay");
const myTitle=document.querySelector("#input_title");

//creating navigation bar 
for(let i=0;i<data.length;i++)
{
    const uli_nav=document.createElement("ul");
    const image_nav=document.createElement("img");
    image_nav.setAttribute("src",data[i].previewImage);
    image_nav.classList.add("navimage");
    uli_nav.appendChild(image_nav);
    uli_nav.append(" " +data[i].title);
    nav.append(uli_nav);
}
let nav_element=nav.children;//all the navigation bar elements as object

//initial action
nav_element[0].classList.add("bluebutton");
let curr_nav=0;//for current navigation
myImage.setAttribute("src",data[0].previewImage);
myTitle.value=data[0].title;