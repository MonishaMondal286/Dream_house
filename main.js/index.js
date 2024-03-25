import { navbar } from "../appending/heading-append.js";
import { footer } from "../appending/footer-append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();