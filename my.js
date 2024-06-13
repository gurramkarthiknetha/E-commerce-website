function buynow () {
  alert("Thank you for buying");
}
let count=0;
let bill=document.getElementById('totalbill');
function banana() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "Banana";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}

function carrot() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://seed2plant.in/cdn/shop/products/carrotseeds.jpg?v=1604032858');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "carrot";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}
function apple() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "Apple";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}
function pa() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://www.mashed.com/img/gallery/apparently-one-pineapple-is-not-a-single-fruit-heres-why/l-intro-1694898682.jpg');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "PineApple";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}
function orange() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvL7pU8njiOi7w5YieaAbPhNatx2BePtvKAQ&s');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "orange";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}
function plam() {
  let cartcon = document.getElementById('cartitemscon');
  let l1 = document.createElement('li');
  let fc = document.createElement('div'); // fc = first container
  fc.classList.add('d-flex', 'flex-row',);
  let img = document.createElement('img');
  img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnaRs_eLVYe8rmeqfBylQyWaw6jxGqwHE0A&s');

  let sc = document.createElement('div'); // sc = second container
  sc.classList.add('d-flex','flex-column','justify-content-center'); //
  
  let name = document.createElement('h6');
  let text = "Plam Fruit";
  name.textContent = text;

  let price = document.createElement('h6');
  let pricerate="120 /- only";
  price.textContent =pricerate;
  
  sc.appendChild(name);
  sc.appendChild(price);
  fc.appendChild(img);
  fc.appendChild(sc); // Append the second container to the first container
  l1.appendChild(fc); // Append the first container to the list item
  cartcon.appendChild(l1); // Append the list item to the cart container
  count=count+120;
  bill.textContent=count;
}
        function add(name, imgUrl, price) {
            const cartcon = document.getElementById('cartitemscon');
            const l1 = document.createElement('li');
            l1.classList.add('list-group-item');
            const fc = document.createElement('div'); // fc = first container
            fc.classList.add('d-flex', 'flex-row');

            const img = document.createElement('img');
            img.setAttribute('src', imgUrl);

            const sc = document.createElement('div'); // sc = second container
            sc.classList.add('d-flex', 'flex-column', 'justify-content-center');

            const itemName = document.createElement('h6');
            itemName.textContent = name;

            const itemPrice = document.createElement('h6');
            itemPrice.textContent = `${price} /- only`;

            sc.appendChild(itemName);
            sc.appendChild(itemPrice);
            fc.appendChild(img);
            fc.appendChild(sc); // Append the second container to the first container
            l1.appendChild(fc); // Append the first container to the list item
            cartcon.appendChild(l1); // Append the list item to the cart container

            count += price;
            bill.textContent = count;
        }