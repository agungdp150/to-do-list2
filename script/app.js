let btn = document.getElementById("add-li");

btn.addEventListener("click", () => {
  let listShop = {
    product: document.getElementById("nm-product"),
    price: document.getElementById("price-1"),
    store: document.getElementById("store-1")
  };
  if (listShop.product.value > 0 && listShop.price.value > 0 && listShop.product.value > 0) {
    let ul = document.getElementById("li-des");
    let list = document.createElement("li");
    // list.setAttribute("id", "list-1")
    

    let nEleProduct = document.createElement("h4");
    let nElePrice = document.createElement("p");
    let nEleStore = document.createElement("p");
    let closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "btn-li")
    // closeBtn.setAttribute("id", "clo-btn")

    nEleProduct.appendChild(document.createTextNode(listShop.product.value));
    list.appendChild(nEleProduct);
    nElePrice.appendChild(document.createTextNode(listShop.price.value));
    list.appendChild(nElePrice);
    nEleStore.appendChild(document.createTextNode(listShop.store.value));
    list.appendChild(nEleStore);
    closeBtn.append(document.createTextNode("x"));
    list.appendChild(closeBtn);

    ul.appendChild(list);

    listShop.product.value = "";
    listShop.price.value = "";
    listShop.store.value = "";

    // let removeList = document.getElementById("clo-btn")
    // let childList = document.getElementById("li-des")
    // removeList.removeChild(childList);
  ul.addEventListener("click", (event) => {
      event.target.remove();
    });
  } else {
    alert ("Something went wrong, you need to fill blank space!!!");
  }
});







