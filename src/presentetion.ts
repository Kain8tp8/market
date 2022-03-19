// import { Product, tomato } from "./data.js";
import { search , render } from "./logic.js"

const submit: HTMLElement = document.querySelector("#submit")!;
const input: HTMLInputElement = document.querySelector("#search")!;


submit.onclick = () => {
  let name = input.value;
  let pupils = search(name);
  for (const pupil of pupils) {
    render(pupil)
    return
  }
  
};
// const container: HTMLElement = document.querySelector(".container-sm")!;
// Card template
// function render( product: Product) {

//   let card = document.createElement("div");
//   card.className = "card";
//   card.style.width = "18rem"

//   let img = document.createElement("img");
//   img.src = product.picture;
//   img.className = "card-img-top ratio ratio-1x1";


//   let cardBody = document.createElement("div");
//   cardBody.className = "card-body";

//   let title = document.createElement("h5");
//   title.className = "card-title";
//   title.innerText = `${product.name}`;

//   let text = document.createElement("p");
//   text.className = "card-text";
//   text.innerText = `${product.commit}`;

//   let textSuccess = document.createElement("h4");
//   textSuccess.className = "text-success";
//   textSuccess.innerText = `${product.prices}`;

//   let btn = document.createElement("a");
//   btn.className = "btn btn-warning w-50";
//   btn.innerText = "buy";

//   container.appendChild(card)
//   card.appendChild(img);
//   card.appendChild(cardBody);
//   cardBody.appendChild(title);
//   cardBody.appendChild(text);
//   text.appendChild(textSuccess);
//   cardBody.appendChild(btn);
// }
// 
// render(tomato[2])
// render(tomato[2])
// render(tomato[3])
// render(tomato[2])
// render(tomato[3])