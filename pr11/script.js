// 1. Создаем массив с товарами
let items = [
  { name: 'Item 1', price: 10, quantity: 1 },
  { name: 'Item 2', price: 20, quantity: 1 },
  { name: 'Item 3', price: 30, quantity: 1 }
];

// Функция для отображения товаров в корзине
function displayCartItems() {  
  const cartItems = document.getElementById('cart-items'); 
  cartItems.innerHTML = '';  
  let totalCost = 0; 
  for (let i = 0; i < items.length; i++) {    
    const li = document.createElement('li'); 
    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.addEventListener('click', function() {
      items[i].quantity++;
      displayCartItems();
    });
    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    minusBtn.addEventListener('click', function() {
      if (items[i].quantity > 0) {
        items[i].quantity--;
        displayCartItems();
      } 
    });
    li.textContent = items[i].name + " -  " + items[i].price + " - Quantity: " + items[i].quantity;
    li.appendChild(plusBtn);
    li.appendChild(minusBtn);
    cartItems.appendChild(li);
    if (items[i].quantity == 0){
        li.style.display = "none";
    } 
    totalCost += items[i].price * items[i].quantity;    
  } 

  

  const total = document.getElementById("total-cost");  
  total.innerText = totalCost; 
} 


document.getElementById('append-button').addEventListener('click', function() {
  const newItem = { name: 'New Item', price: 50, quantity: 1 };
  items.push(newItem);

  displayCartItems();
});


document.getElementById('clear-button').addEventListener('click', function() {
  items = [];
  displayCartItems();
});


function filterItems(minValue, maxValue) {
  const filteredItems = items.filter(function(item) {
    return item.price >= minValue && item.price <= maxValue;
  });

  const filteredList = document.getElementById('filtered-items');
  filteredList.innerHTML = '';

  for (let i = 0; i < filteredItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = filteredItems[i].name + "";
  }
}

// Обработчик нажатия кнопки для фильтрации товаров
document.getElementById('filter-button').addEventListener('click', function() {
  const minValue = parseInt(document.getElementById('min-value').value);
  const maxValue = parseInt(document.getElementById('max-value').value);

  filterItems(minValue, maxValue);
});

// 4. Функции для сортировки массива
function sortAscending() {
  items.sort(function(a, b) {
    return a.price - b.price;
  });

  displayCartItems();
}

function sortDescending() {
  items.sort(function(a, b) {
    return b.price - a.price;
  });

  displayCartItems();
}

// Обработчики нажатия кнопок для сортировки
document.getElementById('asc-button').addEventListener('click', sortAscending);
document.getElementById('desc-button').addEventListener('click', sortDescending);


// Инициализация отображения товаров в
displayCartItems();


