/*Find elements in the DOM   
// By ID
*/

// you need to pass an ID with quotes, otherwise it refers to a variable
const mainTitle = document.getElementById("main-title");

console.log(mainTitle);

mainTitle.innerHTML = "Welcome, LoopeyTunes";

// by class name
// Element(s) is plural so it will select and return multiple

const infoCollection = document.getElementsByClassName("info");

// this returns a HTML collection.
// HTML collection is similar to an array, but instead...
console.log(infoCollection);

// now let's convert it to an array
// convert it with the spread operator
const infoElementsArray = [...infoCollection];

// now that it's an array, you can use the forEach method..

infoElementsArray.forEach(function (element) {
  //  element.innerHTML = "this is the new text";

  // this can be used to change css properties
  element.getElementsByClassName.color = "blue";
});

// By Tag Name

const pHTMLCollection = document.getElementsByTagName("p");

const pHTMLElementsArray = [...pHTMLCollection];

// pHTMLCollection.forEach(function (element) {
//   element.getElementsByClassName.color = "blue";
// });

// by css selectors

// first element matching this css selector in the HTML doc
const first = document.querySelector("header h2");

// all elements matching this css selector in the HTML doc
// this returns a nodeList (so we can use forEach directly)
const all = document.querySelectorAll("header h2");

all.forEach(function (elm) {
  elm.style.color = "red";
});

// get all elements by an ID
const productsElm = document.getElementById("products");

// to get the paragraphs inside of products...

const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");

const AltAllParagraphsInProductsElm = productsElm.querySelectorAll("p");
// OR you can just document.querySelectorAll("#products p");

/* **********************
 ***** Properties ********
 ************************/

// Read/Modify HTML content -> elm.innerHTML

const pikachuElm = document.getElementById("pikachu");

pikachuElm.innerHTML = `
  <div>
    <p>one</p>
    <p>two</p>
  </div>
`;

// Read/Modfiy text content --> elm.innerText
let linkElm = document.getElementById("my-link");
linkElm = innerText = "About us - we are amazing";

// Read / modify CSS --> elm.style;

mainTitle.style.color = "purple";
// we need to use kebab style and not camel case here bc we are inside JS
mainTitle.style.backgroundColor = "yellow";

mainTitle.style.border = "2px solid green";

// Read / Modify the ID --> elm.ID
mainTitle.id = "this-is-the-new-id";

// Read / Modify class --> elm.className
mainTitle.className = "title rounded";

// bonus elm.classList (provides methods to access class names

// elm.classList.remove("foo");
// elm.classList.add("new-class");
// elm.classList.toggle("active");

mainTitle.classList.toggle("important");

/**********
 ***** Attributes *****
 **********************/

// get: elm.getAttribute(attributeName);

// this will tell us what the value of href is.
// const result = linkElm.getAttribute("href");

// modify or create  elm.setAttribute(name, value);

// linkElm.setAttribute("href", "https://ironhack.com");

/******************************
 * **** Create a DOM node *****
 *******************************/

// step 1: create the element

const newImg = document.createElement("img");

// step 2: add content or modify (ex. innerHTML)

// newImg.setAttribute("src", ".images/pikachu.jpg");
// newImg.setAttribute("alt", "beautiful pikachu image");

// step 3: append to the DOM - parentElm.appendChild();

const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);

/***********
 * *********
 * Events***
 * ********
 * *********/

// Examples of Events:
// Document (DOMContentLoaded)
// mouse events (ex. click, mouseover..)
// keyboard events (ex. keydown, keypress...)

const btn = document.getElementById("button-1");
btn.addEventListener("click", () => {
  console.log("user clicked on our btn...");
});

// elm.addEventListener("click", doSomething);

// detect when the user clicks on btn "button-1"+
// append a paragraph (reuse parentELM and append a new paragraph)

// const btn2 = document.getElementById("button-1");

// btn2.addEventListener("click", () => {
console.log("user clicked on button");

// create new paragraph
const newParagraph = document.createElement("p");

// Add content to that paragraph

newParagraph.innerText = "This is my new paragraph";

// parentElmPikacu.appendChild(newParagraph);

document.addEventListener("keydown", (event) => {
  console.log(`You've pressed the spacebar. Well done!`);
  if (event.code === "space") {
    console.log("You've pressed space");

    const newDiv = document.createElement("div");

    newDiv.innerHTML = "This is a new Div";
    document.appendChild(newDiv);
  }

  // else if...
});

/*********
 **** attach event to multiple elements ****
 ********************************/

// get reference to all elements in class btn
// Options: getElementsByClassNames OR querySelectorAll;

// Event bubbling means that the event listener is triggered further up.
// If there's code defined, it will execute, but if not, no code will be triggered.
// When an event is fired, it will also "bubble up" & fire on all it's ancestors...

const allBtn = document.querySelectorAll(".btn");
allBtn.forEach((btnElm) => {
  console.log(btnElm);

  // allBtn.addEventListener("click", () => {
  //  console.log("this  user clicked on one button");
  //});

  // event.target to get the key that they pressed.
});

/****** Detect Events on elements created dynamically *********** */

// One option, using event bubbling:
// Google: Attach event to dynamic elements
// capture click event anywhere on the document
//check the class "btn submit..."  because it bubbles up.

// Inputs

// You can use document.getElementById... to get an element
// Then you can use element.value to get the value
// Note that this will be type of "String".

// Solution:

// const price = product.querySelector(".price span")

// console.log(price);
// const priceValue = Number(price.innerText)
