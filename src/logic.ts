import { Product, tomato } from "./data.js";

const container: HTMLElement = document.querySelector(".container-sm")!;

export function search(name: string): Product[] {
    if (name === "") {
      return tomato;
    }
    let f = tomato.filter((p) => p.name.toLowerCase() === name.toLowerCase());
    return f;
  }

export  function render( product: Product) {

    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem"
  
    let img = document.createElement("img");
    img.src = product.picture;
    img.className = "card-img-top ratio ratio-1x1";
  
  
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = `${product.name}`;
  
    let text = document.createElement("p");
    text.className = "card-text";
    text.innerText = `${product.commit}`;
  
    let textSuccess = document.createElement("h4");
    textSuccess.className = "text-success";
    textSuccess.innerText = `${product.prices}`;
  
    let btn = document.createElement("a");
    btn.className = "btn btn-warning w-50";
    btn.innerText = "buy";
  
    container.appendChild(card)
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    text.appendChild(textSuccess);
    cardBody.appendChild(btn);
  }