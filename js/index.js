// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value

  let subTotal = price * quantity

  let holdSubTotal = product.querySelector('.subtotal span')
  holdSubTotal.innerHTML = subTotal

  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2     
  //... your code goes here      
  let allProducts = document.querySelectorAll('.product');
  let total = 0

  allProducts.forEach(item => total = total + updateSubtotal(item))

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget.parentNode.parentNode
  console.log('The target in remove is:', target);
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProduct = document.createElement('tr');
  newProduct.className = 'product';
  let name = document.querySelector('.create-product input[type="text"]').value;
  let price = document.querySelector('.create-product input[type="number"]').value;
  newProduct.innerHTML =
  `<td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;
  document.querySelector('tbody').appendChild(newProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((btn) => { 
     btn.addEventListener('click', removeProduct)
  });
  
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct)
});
