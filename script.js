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
//adding click functionality on navigation bar
for(let i=0;i<nav_element.length;i++)
{
    nav_element[i].addEventListener("click",()=>{
        nav_element[curr_nav].classList.remove("bluebutton");
        nav_element[i].classList.add("bluebutton");
        myTitle.value=data[i].title;
        myImage.setAttribute("src",data[i].previewImage);
        curr_nav=i;
    })
}

//adding arrowkey up and down functionality on navigation bar
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowDown"){
      // Do something for "down arrow" key press.
      nav_element[curr_nav].classList.remove("bluebutton");
      curr_nav = (curr_nav<nav_element.length-1) ? curr_nav+1 : 0;
      nav_element[curr_nav].classList.add("bluebutton");
      myTitle.value=data[curr_nav].title;
      myImage.setAttribute("src",data[curr_nav].previewImage);
      }
    if(event.key === "ArrowUp"){
      // Do something for "up arrow" key press.
      nav_element[curr_nav].classList.remove("bluebutton");
      curr_nav = (curr_nav>0) ? curr_nav-1 : nav_element.length-1;
      nav_element[curr_nav].classList.add("bluebutton");
      myTitle.value=data[curr_nav].title;
      myImage.setAttribute("src",data[curr_nav].previewImage);
      }
}, true);
