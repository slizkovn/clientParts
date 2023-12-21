var contentsElement = document.getElementById('contents');

contentsElement.addEventListener('click', function(event) {
  var targetElement = event.target;
  if (targetElement.closest('a') || targetElement.tagName === 'A') {
    if (!confirm('Точно?')) {
      event.preventDefault();
    }
  }
});


setTimeout(function() {
  contentsElement.innerHTML += '<p><a href="https://www.google.com/">Жмииии наконец</a></p>';
}, 3000);


document.getElementById('gallery').addEventListener('click', function(event) {
    var targetThumbnail = event.target.closest('.smallpic');
    var thumbnailSrc = targetThumbnail.src;
    document.getElementById('mainImage').innerHTML = '<img src="' + thumbnailSrc + '" alt="Main Image">';
});


var files = document.getElementById('files');

files.addEventListener('click', function(event) {
  var clickedItem = event.target;
  if (clickedItem.tagName === 'LI') {
    if (event.ctrlKey || event.metaKey) {
      clickedItem.classList.toggle('selected');
    } else {
      var allItems = files.getElementsByTagName('li');
      for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove('selected');
      }
      clickedItem.classList.add('selected');
    }
  }
});


var slider = document.getElementById('slider');
var sliderHandle = document.getElementById('sliderHandle');
var dragging = false;

sliderHandle.addEventListener('mousedown', function(event) {
  dragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (dragging) {
    var newPosition = event.clientX - slider.offsetLeft;
    var sliderWidth = slider.offsetWidth;
    newPosition = Math.max(0, Math.min(newPosition, sliderWidth));

    sliderHandle.style.left = newPosition - sliderHandle.offsetWidth / 2 + 'px';
  }
});

document.addEventListener('mouseup', function() {
  if (dragging) {
    dragging = false;
  }
});



var cart = document.getElementById('cart');
  var totalCost = 0;

  cart.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  cart.addEventListener('drop', function (e) {
    e.preventDefault();
    var draggedItem = document.querySelector('.dragging');

    if (draggedItem) {
      var price = parseFloat(draggedItem.getAttribute('price'));
      totalCost += price;

      var paragraph = document.createElement('p');
      paragraph.textContent = draggedItem.textContent;
      cart.appendChild(paragraph);

      updateTotal();
      draggedItem.classList.remove('dragging');
    }
  });

  document.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.add('dragging');
    }
  });

  function updateTotal() {
    cart.firstChild.textContent = 'Сумма: ' + totalCost + " руб";
  }



function load() {
  var element = document.getElementById('element1');
  var opacity = 0;
  var animation = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(animation);
      return;
    }
    opacity += 0.02;
    element.style.opacity = opacity;
  }, 100);
}

var element = document.getElementById('element2');
element.addEventListener('mouseover', function() {
  var width = window.innerWidth - element.offsetWidth;
  var height = window.innerHeight - element.offsetHeight;
  var x = Math.floor(Math.random() * width/3);
  var y = Math.floor(Math.random() * height/3);
  element.style.left = x + 'px';
  element.style.top = y + 'px';
});

load();