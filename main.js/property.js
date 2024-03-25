import { navbar } from "../appending/heading-append.js";
import { footer } from "../appending/footer-append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();





var houses = [
    {
      "image" : "https://i.pinimg.com/736x/f5/91/ce/f591ce3a339265f4d84a1931b4c81ec9.jpg",
      "description":"Luxury Ocean View",
     
    },
    {
        "image" : "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
        "description":"Luxury Modern House",
    },
    {
        "image" : "https://i.pinimg.com/736x/41/93/e3/4193e31014703c331f0757dfcdef68b4.jpg",
        "description":"Big Villa",
    },
    {
        "image" : "https://i.pinimg.com/originals/1a/19/76/1a1976a8d664d0c3e3cf3dbb9c1214ef.jpg",
        "description":"Modern Glass Houses",
    },
    {
        "image" : "https://i.pinimg.com/736x/f5/91/ce/f591ce3a339265f4d84a1931b4c81ec9.jpg",
        "description":"Beautiful Dream House",
    }
]



let housesList = document.getElementById("dream");
housesList.innerText = null;

let append = (houses)=>{
   
    houses.forEach(({image,description})=>{
        let houseDiv = document.createElement("div");
        houseDiv.setAttribute("id","houseDesign");

        let images = document.createElement("img");
      images.src = image;

      let descriptions = document.createElement("p");
      descriptions.innerText = description;

      houseDiv.append(images,descriptions);

      housesList.append(houseDiv);  
        
    });
}
append(houses);